const toCamelCase = (str: string): string => {
  const strArr = str.split(/\W/);
  const camelCaseStr = strArr.map((item, index) => {
    if (index === 0) {
      return item.toLowerCase();
    }
    return item[0].toUpperCase() + item.slice(1);
  });
  return camelCaseStr.join("");
};

export default toCamelCase;
