"use strict";
/**
 *  1. Input String "Sample Case".toLowerCase() DONE
 *  2. Split Inputnya biar jadi Arr sekalian hapus whitespace DONE
 *  3. Buat Arr [a,i,u,e,o] DONE
 *  4. Seperate vowels dan consonant di compare dengan [aiueo] (buat 1 function) DONE
 *  5. Sort terakhir berdasarkan urutan DONE
 */

const inputToArr = (input) => {
  const inputArr = input.toLowerCase().split("");
  const resultArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] != " ") resultArr.push(inputArr[i]);
  }

  return resultArr;
};

const seperateVowels = (input) => {
  const inputArr = inputToArr(input);
  const vowelArr = [];
  const consonantArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let isVowel = false;

    for (let j = 0; j < vowels.length; j++) {
      if (inputArr[i] === vowels[j]) {
        vowelArr.push(inputArr[i]);
        isVowel = true;
        break;
      }
    }

    if (!isVowel) consonantArr.push(inputArr[i]);
  }

  return { vowels: vowelArr, consonants: consonantArr };
};

const sortBasedOnOrder = (vowelArr) => {
  const resultArr = [];

  outerLoop: for (let i = 0; i < vowelArr.length; i++) {
    for (let k = 0; k < resultArr.length; k++) {
      if (vowelArr[i] === resultArr[k]) continue outerLoop;
    }

    for (let j = 0; j < vowelArr.length; j++) {
      if (vowelArr[i] === vowelArr[j]) resultArr.push(vowelArr[i]);
    }
  }

  return resultArr;
};

const printOutput = (vowelArr, consonantArr) => {
  console.log(`Vowel Characters: ${arrayToString(vowelArr)}`);
  console.log(`Consonant Characters: ${arrayToString(consonantArr)}`);
};

function arrayToString(arr) {
  let temp = "";
  for (const letter of arr) {
    temp += letter;
  }

  return temp;
}

const input = "Sample Case";
const vowels = ["a", "i", "u", "e", "o"];

const vowelArr = sortBasedOnOrder(seperateVowels(input).vowels);
const consonantsArr = sortBasedOnOrder(seperateVowels(input).consonants);
printOutput(vowelArr, consonantsArr);
