// from https://www.codewars.com/kata/582746fa14b3892727000c4f

let countDevelopers =
  list => {
    let filteredList = list.filter(x =>
      x.language === 'JavaScript' && x.continent === 'Europe')
    return filteredList.length
  }
