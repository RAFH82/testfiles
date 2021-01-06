const keysMatch = function(obj1, obj2, keys) {
  for (let element of keys) {
    if (obj1[element] !== obj2[element]) {
      return false;
    }
  }
  return true;
};


keysMatch({a:1, b:2, c:5 }, {a:4, b:2, c:5}, ["a", "b", "c"])