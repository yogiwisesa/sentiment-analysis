const natural = require('natural');

natural.BayesClassifier.load('model.json', null, function (err, classifier) {
    const output = classifier.getClassifications('Penjualan pada bulan januari mengalami peningkatan');
    console.log(output);
});

