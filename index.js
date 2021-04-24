const inquirer = require('inquirer');
const template = require('./src/template.js');
const save = require('./utils/save.js');

const questions = () => {
  return inquirer.prompt ([
    {
      type:'input',
      name: 'title',
      message: 'what is the title of your application?',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please enter your title');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'description',
      message: 'Provide your project description',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please enter your project description');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'installation',
      message: 'Provide your project installation instruction',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please provide your project installation instruction');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'usage',
      message: 'Provide instruction for use of your project',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please Provide instruction for use of your project');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'contrinuting',
      message: 'Provide guideline for contributions of your project',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please Provide guideline for contributions of your project');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'test',
      message: 'Provide test intrustion for your project',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please Provide test intrustion for your project');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'github',
      message: 'Provide github username for your project',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please Provide github username for your project');
          return false
        }
      }
    },

    {
      type:'input',
      name: 'email',
      message: 'Provide your email address',
      validate: input => { 
        if (input) {
          return true
        }
        else {
          console.log('please Provide your email address');
          return false
        }
      }
    },

    {
      type:'list',
      name: 'license',
      message: 'Select a license for your application',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None'],
      // validate: input => { 
      //   if (input.length === 1) {
      //     return `![GitHub license](https://img.shields.io/badge/license-${input}-blue.svg)`
      //   }
      //   else {
      //     console.log('Select a license!');
      //     return false
      //   }
      // }

    }
    
  ])
  .then(data => {
    return data
  })
}

questions()
.then (data => {
  return template(data);
})
.then (data => {
  return save(data);
})
.then (message => {
  console.log(message);
})
.catch (error => {
  console.log(error);
})
  


