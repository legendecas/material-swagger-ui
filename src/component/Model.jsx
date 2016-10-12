import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import hljs from 'highlight.js';
import _ from 'lodash';
import './Model.css';

function formatSchema(schema, name = '') {
  switch (schema.type) {
    case 'object':
      return `${name ? `${name}: ` : ''}{\n${
        _.map(schema.properties,
          (property, key) => formatSchema(property, key).replace(/\n/g, '\n  '))
          .map(str => `  ${str},`)
          .join('\n')
        }\n}`;
    case 'array':
      return `${name ? `${name}: ` : ''}[\n  ${
        formatSchema(schema.items, 'items').replace(/\n/g, '\n  ')
        }\n]`;
    default:
      return `${name}: (${schema.type}${
        schema.enum ? `, allow: ${schema.enum.map(type => String(type)).join(', ')}` : ''
        })${
        schema.description ? ` ${schema.description}` : ''
      }`;
  }
}

export default class Model extends Component {
  static propTypes = {
    schema: PropTypes.object,
    examples: PropTypes.object,
  };

  constructor(props, ...rest) {
    super(props, ...rest);
    const { examples = {} } = this.props;
    this.state.mimeTypes = Object.getOwnPropertyNames(examples);
    this.state.mimeType = _.first(this.state.mimeTypes, '');
  }

  state = {
    modelTab: 'schema',
  };

  componentDidUpdate() {
    hljs.highlightBlock(this.codeBlock);
  }

  setTab(tab) {
    this.setState(state => ({ ...state, modelTab: tab }));
  }

  setMimeType(mimeType) {
    this.setState(state => ({ ...state, mimeType }));
  }

  render() {
    const { mimeTypes } = this.state;

    return (
      <div className="model-container">
        <div className="model-button-container">
          <a
            className={classNames({
              'blue-grey-text text-darken-1': this.state.modelTab !== 'schema',
            })}
            onClick={() => this.setTab('schema')}
          >Model Schema</a>
          <div className="model-button-separator"/>
          <a
            className={classNames({
              'blue-grey-text text-darken-1': this.state.modelTab !== 'example',
              disabled: !this.props.examples,
            })}
            onClick={() => this.props.examples && this.setTab('example')}
          >Example</a>
          <div
            className={`input-field ${classNames({ hide: this.state.modelTab !== 'example' })}`}
          >
            <select
              onChange={event => this.setMimeType(event.target.value)}
              defaultValue={this.state.mimeType}
            >{mimeTypes.map(mime => <option key={mime} value={mime}>{mime}</option>)}
            </select>
          </div>
        </div>
        <pre className="model-code-block">
          <code ref={ref => this.codeBlock = ref}>
            {this.state.modelTab === 'schema'
              ? formatSchema(this.props.schema)
              : JSON.stringify(this.props.examples && this.props.examples[this.state.mimeType],
              null, 2)
            }
          </code>
        </pre>
      </div>
    );
  }
}
