import _ from 'lodash';

const initialState = {
  store: {},
  tags: [],
  entrypoints: [],
};

function extractTags(definedTags, entrypoints) {
  return _.uniqBy(
    [
      ...definedTags,
      ..._.flatMap(entrypoints, entrypoint =>
        _.map(entrypoint.operation.tags, tag => ({
          name: tag,
          description: '',
        }))),
    ],
    'name');
}

function extractEntrypoints(pathsObject) {
  return _.flatMap(pathsObject, (pathObject, path) =>
    _.map(pathObject, (operationObject, method) => ({
      path, method, operation: operationObject,
    })));
}

function defineSchema(schema, definitions) {
  if (!schema) {
    return schema;
  }
  if (schema.$ref) {
    return defineSchema(definitions(schema.$ref), definitions);
  }

  switch (schema.type) {
    case 'object':
      return {
        ...schema,
        properties: _.mapValues(schema.properties, property => defineSchema(property, definitions)),
      };
    case 'array':
      return {
        ...schema,
        items: defineSchema(schema.items, definitions),
      };
    default:
      return schema;
  }
}

function defineEntrypoints(entrypoints, definitions) {
  return entrypoints.map(entrypoint => ({
    ...entrypoint,
    operation: {
      ...entrypoint.operation,
      parameters: _.map(entrypoint.operation.parameters, param => {
        if (param.$ref) {
          return definitions(param.$ref);
        }
        return { ...param, schema: defineSchema(param.schema, definitions) };
      }),
      responses: _.mapValues(entrypoint.operation.responses, responseObject => ({
        ...responseObject,
        schema: defineSchema(responseObject.schema, definitions),
      })),
    },
  }));
}

function getDefinitions(definitionObject) {
  return (key) => {
    if (key.startsWith('#/definitions/')) {
      return definitionObject[_.replace(key, '#/definitions/', '')];
    }
    return undefined;
  };
}

export default function definition(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'GOT_DEFINITION':
      newState.store = action.definition;
      newState.entrypoints = defineEntrypoints(
        extractEntrypoints(_.get(newState.store, 'paths', {})),
        getDefinitions(newState.store.definitions)
      );
      newState.tags = extractTags(_.get(newState.store, 'tags', []), newState.entrypoints);
      break;
    default:
      break;
  }

  return newState;
}
