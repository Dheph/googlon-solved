function VocabularyTransformUseCase(text,alphabet){

  const newText = text.split(' ', text.length);

  var result = 0;
  var newVocabulary = [];

  newText.map(word => {
      for (var i = 0; i < word.length; i++) {
          const value = alphabet.indexOf(word[i]);
          result = result + (value * (Math.pow(20, i)));
      }       

      if (result % 5 === 0 && result >= 563131) {
          newVocabulary.push(result);
      }        

  });

  const filtered = newVocabulary.filter((text, index, array) => {
      return array.indexOf(text) === index;
  });
  
  console.log(filtered);
}

module.exports = VocabularyTransformUseCase