var groupAnagrams = function (strs) {
  const map = {};

  strs.forEach((str) => {
    const key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  });

  return Object.values(map);
};
