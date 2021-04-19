const fs = require('fs');

module.exports = data => {
    return new Promise ((resolve, reject) => {
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