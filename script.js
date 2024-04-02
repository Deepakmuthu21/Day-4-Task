// print odd number---------------//IIFE function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];
(function (a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      result.push(a[i]);
    }
  }
  console.log(result);
})(arr);

//annonyoms function
var result1=[]
let odd = function (b) {
  for (var i = 0; i < b.length; i++) {
    if (b[i] % 2 !== 0) {
      result1.push(b[i]);
    }
  }
  return result1;
}
console.log( odd(arr));
// arrow function 
var result1=[]
let odd1 =  (b) =>{
  for (var i = 0; i < b.length; i++) {
    if (b[i] % 2 !== 0) {
      result1.push(b[i]);
    }
  }
  return result1;
}
console.log( odd1(arr));

//Title case-----------
let str = "iAM CurreNTlY leaRNIng gUVI";

//IIFE function

(function (c) {
  var c = c.toLowerCase().split(" ");
  for (var i = 0; i < c.length; i++) {
    c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
  
}
console.log("IFFE Function : ",c.join(" "));
})(str);


// annonymos function
let TitleCase = function (c) {
  var c = c.toLowerCase().split(" ");
  for (var i = 0; i < c.length; i++) {
    c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
  
}
return c.join(" ")
}
console.log( "Annonymos Function :",TitleCase(str));

//arrow function
let TitleCase1 =  (c)=> {
  var c = c.toLowerCase().split(" ");
  for (var i = 0; i < c.length; i++) {
    c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
  
}
return c.join(" ")
}
console.log( "Arrow Function :",TitleCase1(str));


// sum of numbers--------

// IFFE function
var sum = 0;
(function (d) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + d[i];
  }
  console.log(sum);
})(arr);


//Annonymos Function

var sum = 0;
let sumofdigit = function (e) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + e[i];
  }
  return sum;
}
console.log(sumofdigit(arr));


//arrow function
var sum = 0;
let sumofdigit1 =  (e)=> {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + e[i];
  }
  return sum;
}
console.log(sumofdigit1(arr));



// To check prime number------
// IFFE function

let arr1 = [1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
(function (arr) {
  var primeNumbers = function (arr) {
      function isPrime(num) {
          if (num <= 1) {
              return false;
          }
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  return false;
              }
          }
          return true;
      }

      var primeArr = [];
      for (var i = 0; i < arr.length; i++) {
          if (isPrime(arr[i])) {
              primeArr.push(arr[i]);
          }
      }
      return primeArr;
  };
  console.log("IIFE Function  :", primeNumbers(arr));
})(arr1)

/// Annonymos Function
let isprime=function (arr) {
  var primeNumbers = function (arr) {
      function isPrime(num) {
          if (num <= 1) {
              return false;
          }
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  return false;
              }
          }
          return true;
      }

      var primeArr = [];
      for (var i = 0; i < arr.length; i++) {
          if (isPrime(arr[i])) {
              primeArr.push(arr[i]);
          }
      }
      return primeArr;
  };
  return primeNumbers(arr);
}
console.log("Annonymos Function",isprime(arr1))
//Arrow function
let isprime1=function (arr) {
  var primeNumbers = function (arr) {
      function isPrime1(num) {
          if (num <= 1) {
              return false;
          }
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  return false;
              }
          }
          return true;
      }

      var primeArr = [];
      for (var i = 0; i < arr.length; i++) {
          if (isPrime1(arr[i])) {
              primeArr.push(arr[i]);
          }
      }
      return primeArr;
  };
  return primeNumbers(arr);
}
console.log("Annonymos Function",isprime1(arr1))

// Return all the palindromes in an array


//* IIFE Function
var palindromes = (function (arr) {
  function isPalindrome1(str) {
      let value = str.toLowerCase();
      return value === value.split("").reverse().join("");
  }

  var result = [];
  for (var i = 0; i < arr.length; i++) {
      if (isPalindrome1(arr[i])) {
          result.push(arr[i]);
      }
  }
  return result;
})
console.log("IIFE Function :", palindromes(["tenet","mam","guvi","madam","enjo"]))


//* Annoymous Function
var findPalidromes = function (arr) {
  function isPalindrome(str) {
      let value = str.toLowerCase();
      return value === value.split("").reverse().join("");
  }

  let palindromeArr = [];
  for (var i = 0; i < arr.length; i++) {
      if (isPalindrome(arr[i])) {
          palindromeArr.push(arr[i]);
      }
  }
  return palindromeArr;
};
console.log("Arrow Function :", findPalidromes(["tenet","mam","guvi","madam","enjo"]))





//* Arrow Function
var findPalidromes2 = (arr) => {
  function isPalindrome2(str) {
      let value = str.toLowerCase();
      return value === value.split("").reverse().join("");
  }

  let palindromeArr = [];
  for (var i = 0; i < arr.length; i++) {
      if (isPalindrome2(arr[i])) {
          palindromeArr.push(arr[i]);
      }
  }
  return palindromeArr;
};
console.log("Arrow Function :", findPalidromes2(["tenet","mam","guvi","madam","enjo"]));



//!  Return median of two stored arrays of the same size
//* Annoymous Function
const median = function (ar1, ar2) {
  const merged = [...ar1, ...ar2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 0) {
      const midIndex = length / 2;
      return (merged[midIndex - 1] + merged[midIndex]) / 2;
  } else {
      const midIndex = Math.floor(length / 2);
      return merged[midIndex];
  }
};
console.log("Annoymous Function", median([1, 3, 5], [2, 4, 6]));

//* IIFE Function
(function (arr1, arr2) {
  const medianArrays1 = function (arr1, arr2) {
      const merged = [...arr1, ...arr2].sort((a, b) => a - b);
      const length = merged.length;

      if (length % 2 === 0) {
          const midIndex = length / 2;
          return (merged[midIndex - 1] + merged[midIndex]) / 2;
      } else {
          const midIndex = Math.floor(length / 2);
          return merged[midIndex];
      }
  };
  console.log("IIFE Function ", medianArrays1(arr1, arr2));
})([1, 3, 5], [2, 4, 6]);


//! 1(G) Remove duplicates from an array
//* Annoymous Function
var removedDuplicateArray = function (arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
      }
  }
  return unique;
};
console.log("Annoymous Function :", removedDuplicateArray([2, 'apple', 4, 'banana', 6, 4, 'orange', 'apple', 8, 'banana']));

//* IIFE Function
(function (arr) {
  let unique1 = [];
  for (let i = 0; i < arr.length; i++) {
      if (unique1.indexOf(arr[i]) === -1) {
          unique1.push(arr[i]);
      }
  }
  console.log("IIFE Function :", unique1)
})([2, 'apple', 4, 'banana', 6, 4, 'orange', 'apple', 8, 'banana'])


//! 1(h) Rotate an array by k times
//* Annoymous Function
const Rotate= function (arr, rotations) {
  rotations = rotations % arr.length;
  const rotateLeft = () => arr.push(arr.shift());

  for (let i = 0; i < rotations; i++) {
      rotateLeft();
  }
  return arr;
}
const array = [1, 2, 3, 4, 5];
const k = array.length;
console.log( array);
console.log( Rotate(array, k));

//* IIFE Function
(function (array1, k1) {
  const rotateArray1 = function (arr, rotations) {
      rotations = rotations % arr.length;
      const rotateLeft = () => arr.push(arr.shift());

      for (let i = 0; i < rotations; i++) {
          rotateLeft();
      }
      return arr;
  }
  console.log("IIFE Function:", array);
  console.log( rotateArray1(array1, k1));
})
const array1 = [1, 2, 3, 4, 5];
const k1 = array.length;








