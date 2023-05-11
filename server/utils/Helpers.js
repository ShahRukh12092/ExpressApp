module.exports.convertToPlainJSObject = (item) => {
  return JSON.parse(JSON.stringify(item));
};
