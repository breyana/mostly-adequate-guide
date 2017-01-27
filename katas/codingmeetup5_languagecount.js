//From https://www.codewars.com/kata/5828713ed04efde70e000346

function countLanguages(list) {
  return list.reduce((obj, x) => {
    if (obj[x.language]) {
      obj[x.language] += 1
    } else {
      obj[x.language] = 1
    }
    return obj
  }, {})
}
