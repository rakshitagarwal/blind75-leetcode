var groupAnagrams = function (strs) {
  const sorted = strs.map((str) => str.split("").sort().join(""));
  const map = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }

  return Object.values(map);
};
