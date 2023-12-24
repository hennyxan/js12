/////////// Filter ///////////

const name = ['Kolya', 'Roma', 'Tanya', 'Dima', 'Vova', 'Valera'];

function filteritem(str, num, callback) {
  let result = name.filter((name) => name.indexOf(str) !== -1);
  result = result.slice(0, 3);
  callback(result);
}
function showFilter(wrd) {
  console.log(wrd);
}
filteritem("a", 3, showFilter);

////////// Filter /////////////

////////// DelItem  and  Delitems//////////////

var arr = [
  { name: 'Roma', age: 23, },
  { name: 'Tanya', age: 21, },
  { name: 'Dima', age: 70, },
  { name: 'Valera', age: 54, },
  { name: 'Vova', age: 26, },
  { name: 'Kolya', age: 68, }
];
var delitem = [{ name: 'Roma', age: 23, }, { name: 'Kolya', age: 68, }];
for (let i = 0; i < arr.length; i++) {
  console.log("i: " + i);
  arr.splice(i, 1);
  console.log(arr);
}

console.log(arr);

////////// DelItems  and  Delitems//////////////
