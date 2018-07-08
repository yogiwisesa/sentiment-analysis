function addDocument(classifier, data, output) {
    let index = 0;
    for (index; index < data.length; index++) {
        classifier.addDocument(data[index], output);
    }
}

function saveModel(classifier) {
    classifier.save('model.json', function (err) {
        if (err) {
            return console.log('Gagal menyimpan model!');
        }
        console.log('Berhail menyimpan model!');
    });
}

module.exports = {
    addDocument, saveModel
}