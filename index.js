const readline = require('readline-sync');
function start(){
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    function askAndReturnSearchTerm(){
        return readline.question('type a Wikipedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefix = ['who is', 'what is', 'the history of']
        const selectPrefixIndex =  readline.keyInSelect(prefix, 'choose one option');

        return prefix[selectPrefixIndex];
    }

    console.log(content);
}

start();