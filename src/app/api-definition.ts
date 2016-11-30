export interface ApiDefinition {
  swagger: string;
  info: InfoObject;
  host?: string;
  basePath?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths: {[key: string]: PathItemObject};
  definitions: {[key: string]: SchemaObject};
  parameters: {[key: string]: ParameterObject};
  responses: {[key: string]: ResponseObject};
  securityDefinitions: {[key: string]: SecuritySchemeObject};
  security: SecurityRequirementObject[];
  tags: TagObject[];
  externalDocs: ExternalDocumentationObject;
}

export interface InfoObject {
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

export interface PathItemObject {
  $ref?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  parameters?: (ParameterObject | ReferenceObject)[];
}

export interface OperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  operationId?: string;
  consumes?: string[];
  produces?: string[];
  parameters?: (ParameterObject | ReferenceObject)[];
  responses: ResponsesObject;
  schemes?: string[];
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
}

export interface ParameterObject {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  schema?: SchemaObject | ReferenceObject;
  type?: string;
  format?: string;
  allowEmptyValue?: boolean;
  items?: ItemsObject;
  collectionFormat?: string;
  default?: any;
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
  enum?: any[];
  multipleOf?: number;
}

export interface ReferenceObject {
  $ref: string;
}

export interface ResponsesObject {
  default: (ResponseObject | ReferenceObject);
  [key: string]: (ResponseObject | ReferenceObject);
}

export interface ResponseObject {
  description: string;
  schema?: SchemaObject | ReferenceObject;
  headers?: {
    [key: string]: {
      description?: string;
      type: string;
      format?: string;
      items?: ItemsObject;
      collectionFormat?: string;
      default?: any;
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
      enum?: any[];
      multipleOf?: number;
    };
  };
  examples?: {[key: string]: any};
}

export interface SecuritySchemeObject {
  type: string;
  description?: string;
  name: string;
  in?: string;
  flow?: string;
  authorizationUrl?: string;
  tokenUrl?: string;
  scopes?: {[key: string]: string};
}

export interface SecurityRequirementObject {
  [key: string]: string[];
}

export interface SchemaObject {
  discriminator?: string;
  readOnly?: boolean;
  xml?: XmlObject;
  externalDocs?: ExternalDocumentationObject;
  example?: any;
  collectionFormat?: string;
  default?: any;
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
  enum?: any[];
  multipleOf?: number;
}

export interface ItemsObject {
  type: string;
  format?: string;
  items: ItemsObject;
  collectionFormat?: string;
  default?: any;
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
  enum?: any[];
  multipleOf?: number;
}

export interface ExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface XmlObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

export interface TagObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
}
