function anagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let usedLetters = "";
  let count=0;
  console.log(str1.length);

  for (i = 1; i <= str1.length; i++) {
    for (j = 1; j <= str2.length; j++) {
      if (str1[i] == str2[j]) {
        if (!usedLetters.includes(str2[j])) {
          usedLetters = usedLetters + (str2[j]);
          count++;
          console.log(count);
        }
      }
    }
  }
  if(count==str1.length){
      return true;
  } else{
      return false;
  }
}


function isAnagram(str1,str2){
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    if(str1===str2){console.log('true');
    }

}

isAnagram('obb4','bo4b');


// console.log(anagram('bob', 'bob'));
