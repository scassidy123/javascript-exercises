# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

1. remove all of the spaces and punctuation, turn to an array
2. count number of indexes (.length?)
3. if it's even
  compare first half of array to second half of array
4. if it's odd
  compare first half of array minus 1 to second half of array
