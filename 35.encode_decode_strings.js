var encode = function (strs) {
  if (!strs.length) return null;
  return strs.join("-encodeStr");
};

var decode = function (s) {
  if (s === null) return [];
  return s.split("-encodeStr");
};

const strs = ["hello", "world"];
const enc = encode(strs);
console.log("enc", enc);
const dec = decode(enc);
console.log("dec", dec);
