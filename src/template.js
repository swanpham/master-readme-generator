module.exports = responses => {
    const {title, description, installation, usage, contrinuting, test, github, email, license} = responses
    
    return `
# ${ title}
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

## Description
${description}

## Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Question](#questions)

## Installation
${ installation }

## Usage
${ usage }

## License
${ license }

## Contribution
${ contrinuting }

## Tests
${ test }

## Questions
To conatct me with any further questions:
* [Github](https://github.com/${ github })
* [Email](mailto://${ email })  
`
}