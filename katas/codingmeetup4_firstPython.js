//From https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
  let PyDev = list.find(element =>  element.language === 'Python')
  return PyDev ? `${PyDev.firstName}, ${PyDev.country}` : "There will be no Python developers"
}
