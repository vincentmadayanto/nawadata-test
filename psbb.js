"use strict";

/**
 *  1. Input Jumlah Keluarga DONE
 *  2. Input Anggota Keluarga -> split by whitespace DONE
 *  3. Validasi Input -> members.length != families DONE
 *  4. Cari Dulu members yang `4`, push ke array baru DONE
 *  5. Sort dari besar ke kecil dulu DONE
 *
 *  3 nyari 1
 *  2 nyari 2 atau 1
 *  1 nyari 1,2,3
 */

const mapStringToNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
};

const sortDescending = (unsortedArr) => {
  for (let i = 0; i < unsortedArr.length; i++) {
    for (let j = 0; j < unsortedArr.length - i - 1; j++) {
      if (unsortedArr[j] < unsortedArr[j + 1]) {
        let temp = unsortedArr[j];
        unsortedArr[j] = unsortedArr[j + 1];
        unsortedArr[j + 1] = temp;
      }
    }
  }
};

const busses = (membersArr) => {
  if (families !== membersArr.length)
    return "Input must be equal with count of family";

  const tempArr = [];
  let filterArr = [];

  for (let i = 0; i < membersArr.length; i++) {
    if (membersArr[i] === 4) {
      tempArr.push(membersArr[i]);
      membersArr[i] = null;
      continue;
    }

    for (let j = 0; j < membersArr.length; j++) {
      if (membersArr[i] === 3 && membersArr[j] === 1 && i !== j) {
        tempArr.push(membersArr[i] + membersArr[j]);
        membersArr[i] = null;
        membersArr[j] = null;
        continue;
      }

      if (membersArr[i] === 2 && membersArr[j] === 2 && i !== j) {
        tempArr.push(membersArr[i] + membersArr[j]);
        membersArr[i] = null;
        membersArr[j] = null;
        continue;
      }

      if (membersArr[i] === 2 && membersArr[j] === 1 && i !== j) {
        membersArr[j] = membersArr[i] + membersArr[j];
        membersArr[i] = null;
      }

      if (membersArr[i] === 1 && membersArr[j] === 1 && i !== j) {
        membersArr[j] = membersArr[i] + membersArr[j];
        membersArr[i] = null;
      }
    }

    filterArr = membersArr.filter((item) => item !== null);
  }

  return `Minimum bus required is: ${[...tempArr, ...filterArr].length}`;
};

let families = 8;
let members = "2 3 4 4 2 1 3 1";
const membersArr = members.split(" ");

mapStringToNumber(membersArr);
sortDescending(membersArr);
console.log(busses(membersArr));
