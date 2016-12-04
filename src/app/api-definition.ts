export interface IApiDefinition {
  swagger: string;
  info: IInfoObject;
  host?: string;
  basePath?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths: {[key: string]: IPathItemObject};
  definitions: {[key: string]: ISchemaObject};
  parameters: {[key: string]: IParameterObject};
  responses: {[key: string]: IResponseObject};
  securityDefinitions: {[key: string]: ISecuritySchemeObject};
  security: ISecurityRequirementObject[];
  tags: ITagObject[];
  externalDocs: IExternalDocumentationObject;
}

export interface IInfoObject {
  title: string;
  description?: string;
  termOfService?: string;
  contact?: {
    name?: string;
    url?: string;
    email?: string;
  };
  license?: {
    name: string;
    url?: string;
  };
  version: string;
}

export interface IPathItemObject {
  $ref?: string;
  get?: IOperationObject;
  put?: IOperationObject;
  post?: IOperationObject;
  delete?: IOperationObject;
  options?: IOperationObject;
  head?: IOperationObject;
  patch?: IOperationObject;
  parameters?: (IParameterObject | IReferenceObject)[];
}

export interface IOperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: IExternalDocumentationObject;
  operationId?: string;
  consumes?: string[];
  produces?: string[];
  parameters?: (IParameterObject | IReferenceObject)[];
  responses: IResponsesObject;
  schemes?: string[];
  deprecated?: boolean;
  security?: ISecurityRequirementObject[];
}

export interface IReferenceObject {
  $ref: string;
}

export interface IResponsesObject {
  default?: (IResponseObject | IReferenceObject);
  [key: string]: (IResponseObject | IReferenceObject);
}

export interface IResponseObject {
  description: string;
  schema?: ISchemaObject | IReferenceObject;
  headers?: {
    [key: string]: IHeaderObject;
  };
  examples?: {[key: string]: any};
}

export interface ISecuritySchemeObject {
  type: string;
  description?: string;
  name: string;
  in?: string;
  flow?: string;
  authorizationUrl?: string;
  tokenUrl?: string;
  scopes?: {[key: string]: string};
}

export interface ISecurityRequirementObject {
  [key: string]: string[];
}

export interface IXmlObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

export interface IExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface ITagObject {
  name: string;
  description?: string;
  externalDocs?: IExternalDocumentationObject;
}

export interface IParameterObject extends IJsonSchema {
  name: string;
  in: string;
  schema?: ISchemaObject | IReferenceObject;
  allowEmptyValue?: boolean;
  items?: IItemsObject;
  collectionFormat?: string;
}

export interface ISchemaObject extends IJsonSchema {
  discriminator?: string;
  readOnly?: boolean;
  xml?: IXmlObject;
  externalDocs?: IExternalDocumentationObject;
  example?: any;
  collectionFormat?: string;
}

export interface IHeaderObject extends IJsonSchema {
  items: IItemsObject;
  collectionFormat?: string;
}

export interface IItemsObject extends IJsonSchema {
  items: IItemsObject;
  collectionFormat?: string;
}

export interface IJsonSchema {
  $ref?: string;
  format?: string;
  title?: string;
  description?: string;
  default?: any;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
  enum?: any[];
  type?: string;
}
