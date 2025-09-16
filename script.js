// let arr = ["Chandan", "and"];

// now I have to find that the second string I mean the "and" is it the substring of the first string "Chandan"

let arr = ["Chandan", "and"];

function abc(arr) {
  let arr1 = arr[0].split(""); 
  let arr2 = arr[1].split("");
  let flag = true;

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(abc(arr)); // true (but only checks letters individually, not substring)
