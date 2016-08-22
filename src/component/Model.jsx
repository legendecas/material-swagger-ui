import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import hljs from 'highlight.js';
import _ from 'lodash';
import './Model.css';

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
    const model = this.state.modelTab === 'schema' ?
      this.props.schema :
      this.props.examples[this.state.mimeType];
    const { mimeTypes } = this.state;

    return (
      <div className="model-container">
        <div className="model-button-container">
          <a
            className={classNames({ 'grey-text text-darken-1': this.state.modelTab !== 'schema' })}
            onClick={() => this.setTab('schema')}
          >Model Schema</a>
          <div className="model-button-separator"/>
          <a
            className={classNames({ 'grey-text text-darken-1': this.state.modelTab !== 'example' })}
            onClick={() => this.setTab('example')}
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
            {JSON.stringify(model, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
}
