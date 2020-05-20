const checkingItems = array => {
  for (var i = 0; i < array.length; i++) {
    if (array[i].quality < 0) {
      array[i].quality = 0
    }
  }
  return array
}
