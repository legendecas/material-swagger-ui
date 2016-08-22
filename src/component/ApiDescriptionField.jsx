import React, { PropTypes } from 'react';
import marked from 'marked';
import 'github-markdown-css/github-markdown.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const ApiDescriptionField = ({ description = '' }) => (
  <article
    className="markdown-body"
    dangerouslySetInnerHTML={{ __html: marked(description) }}
  />
);

ApiDescriptionField.propTypes = {
  description: PropTypes.string,
};

export default ApiDescriptionField;
