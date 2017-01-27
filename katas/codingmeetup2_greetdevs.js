//from https://www.codewars.com/kata/58279e13c983ca4a2a00002a

let greetDevelopers = list => {
  list.forEach(function(x) {
      x.greeting = 'Hi ' +  x.firstName + ', what do you like the most about ' + x.language + '?'
  })
  return list
}
