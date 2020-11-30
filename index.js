const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }

      return collection;
    },

    map: function (collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);

      let newArr = [];
      for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]));
      }

      return newArr;
    },

    reduce: function (collection, callback, acc) {
      let sum = acc ? acc : collection[0];
      let i = acc ? 0 : 1;

      for (; i < collection.length; i++) {
        sum = callback(sum, collection[i], collection);
      }

      return sum;
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
      return undefined;
    },

    filter: function (collection, predicate) {
      let newArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArr.push(collection[i]);
      }

      return newArr;
    },

    size: function (collection) {
      return collection instanceof Array
        ? collection.length
        : Object.values(collection).length;
    },

    first: function (collection, n = false) {
      return n ? collection.slice(0, n) : collection[0];
    },

    last: function (collection, n = false) {
      return n
        ? collection.slice(collection.length - n, collection.length)
        : collection[collection.length - 1];
    },

    compact: function (collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN]);
      return collection.filter((el) => !badBad.has(el));
    },

    functions: function () {},
  };
})();

fi.libraryMethod();
