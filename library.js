
const tableConversion = [
    {
        key: 'a',
        value: '1'
    },
    {
        key: 'b',
        value: '2'
    },
    {
        key: 'c',
        value: '3'
       },
    {
        key: 'd',
        value: '4'
    },
    {
      key: 'e',
        value: '5'
       },
    {
        key: 'f',
        value: '6'
    },
    {
        key: 'g',
        value: '7'
    },
    {
        key: 'h',
        value: '8'
    },
    {
        key: 'i',
        value: '9'
    },
    {
        key: 'j',
        value: 'a'
    },
    {
        key: 'k',
        value: 'b'
    },
    {
        key: 'l',
        value: 'c'
    },
    {
        key: 'm',
        value: 'd'
       },
    {
        key: 'n',
        value: 'e'
    },
    {
        key: 'o',
        value: 'f'
       },
    {
        key: 'p',
        value: 'g'
    },
    {
        key: 'q',
        value: 'h'
       },
    {
        key: 'r',
        value: 'i'
    },
    {
        key: 's',
        value: 'j'
       },
    {
        key: 't',
        value: 'k'
    },
    {
        key: 'u',
        value: 'l'
       },
    {
        key: 'v',
        value: 'm'
    },
    {
        key: 'w',
        value: 'n'
       },
    {
        key: 'x',
        value: 'o'
    },
    {
        key: 'y',
        value: 'p'
       },
    {
        key: 'z',
        value: 'q'
      },
      {
        key: '0',
        value: '@'
    },
    {
        key: '1',
        value: '*'
       },
    {
        key: '2',
        value: '{'
    },
    {
        key: '3',
        value: '#'
       },
    {
        key: '4',
        value: '['
    },
    {
        key: '5',
        value: '&'
       },
    {
        key: '6',
        value: '}'
    },
    {
        key: '7',
        value: '?'
    },
    {
        key: '8',
        value: '-'
       },
    {
        key: '9',
        value: ']'
    },
    {
        key: "'",
        value: '|'
       },
    {
        key: 'ç',
        value: '/'
    },
    {
        key: 'à',
        value: '^'
       },
    {
        key: 'é',
        value: '+'
    },
    {
        key: 'ù',
        value: '$'
    }
  

]
    
function getCode(key) {

    const result = tableConversion.filter(item => item.key == key.toLowerCase())
    if (result[0] && result[0].value) {
        return result[0].value
    }

    return '*'
}

function getReverseCode(value) {
    const result = tableConversion.filter(item => item.value == value.toLowerCase())
    if (result[0] && result[0].key) {
        return result[0].key
    }

    return '*'
}

module.exports = {
    getCode,
    getReverseCode
}