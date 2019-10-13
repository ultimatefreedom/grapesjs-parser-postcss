import parser from './parser';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };

  console.log("initialize parser", opts);

  editor.setCustomParserCss(parser);
};
