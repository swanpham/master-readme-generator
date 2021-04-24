const fs = require('fs');

module.exports = data => {
   
  

    return new Promise ((resolve, reject) => {
        console.log(data);
        
        fs.writeFile('./readme.md', data, error => {
            if (error) {
                reject(error)
                return 
            }
            resolve ({
                ok: true,
                message: 'file save'
            })
        })
    })
}