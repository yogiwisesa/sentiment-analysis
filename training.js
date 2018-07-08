const natural = require('natural');
const dataset = require('./dataset.json');
const helper = require('./helper.js');

const nbClassifier = new natural.BayesClassifier;


helper.addDocument(nbClassifier, dataset.positif, 'positif');
helper.addDocument(nbClassifier, dataset.negatif, 'negatif');
helper.addDocument(nbClassifier, dataset.netral, 'netral');

nbClassifier.train();
helper.saveModel(nbClassifier);
