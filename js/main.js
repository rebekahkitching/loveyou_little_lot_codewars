const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]

  function howMuchILoveYou(numPetals) {
    return phrases[(numPetals-1) % phrases.length]
  }