function findElement (array, id) {
  return array.find(function (element) {
    return element.id === id
  })
}

module.exports = findElement
