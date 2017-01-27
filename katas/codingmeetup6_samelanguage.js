//From https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
  return list.every(function(x) {return x.language === list[0].language})
}
