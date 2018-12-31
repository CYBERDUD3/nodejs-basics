module.exports = {
    myFunction: function () {
        // printed in terminal twice since two requests are made
        console.log('Exported!');
    },
    // printed in web client
    myVariable: 'Exported Variable'
}
