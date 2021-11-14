let caesar = function(str, amount) {
  if (amount < 0) {
    return caesar(str, amount + 26);
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let item = str[i].toLowerCase();
    if (item.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        item = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        item = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    result += item;
  }
  return result;
};

module.exports = { caesar }