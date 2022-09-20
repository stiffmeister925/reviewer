// checks if there are the same element in the 2 arrays

const itemInCommon = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++ ) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) return true
    }
  }
  return false;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

itemInCommon(arr1, arr2);

// more efficient way to do
// making an object 
const itemInCommon2 = (arr1, arr2) => {
  let obj = {};
  for(let i = 0; i < arr1.length; i++ ) {
    obj[arr1[i]] = true;
  }
  for(let j = 0; j < arr2.length; j++) {
    if(obj[arr2[j]]) return true
  }
  return false
}

itemInCommon2(arr1, arr2);



