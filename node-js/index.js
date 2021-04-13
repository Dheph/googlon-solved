const parchment = require('../parchment.json')
const PrepositionUseCase = require("./useCases/prepositionUSeCase");
const VerbsUseCase = require("./useCases/verbsUseCase");
const VocabularyTransformUseCase = require("./useCases/vocabularyTransformUseCase");

console.log('WELCOME TO GOOGLON SOLVED');

console.log('-- Prepositions --');

console.log('------- Text A -----------');
PrepositionUseCase(parchment.textA);
console.log('------- Text B -----------');
PrepositionUseCase(parchment.textB);

console.log('-- end Prepositions --');


console.log('-- Verbs --');

console.log('------- Text A -----------');
VerbsUseCase(parchment.textA)

console.log('------- Text B -----------');
VerbsUseCase(parchment.textB)

console.log('-- end Verbs --');


console.log('-- Vocabulary --');

console.log('------- TransformVocabulary -----------');
VocabularyTransformUseCase(parchment.rules.value,parchment.rules.alphabet);

console.log('------- Vocabulary A -----------');
VocabularyTransformUseCase(parchment.vocabularyA,parchment.rules.alphabet);

console.log('------- Vocabulary B -----------');
VocabularyTransformUseCase(parchment.vocabularyB,parchment.rules.alphabet)
console.log('-- end Vocabulary --');

