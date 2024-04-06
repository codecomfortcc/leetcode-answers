// is palindrome number or not
const isPalindrome = function(x) {
  return `${x}`.split("").reverse().join("")===`${x}`
};
console.log(isPalindrome(121)); 
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

