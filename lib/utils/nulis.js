const needle = require('needle')
const _ = require('lodash')
const fetch = require('node-fetch')
const Nulis = (text) => new Promise((resolve, reject) => {
    let url = 'http://salism3.pythonanywhere.com/write?text='
    if (typeof text === 'undefined') { reject('masukan text nya kak.') }
    if (text.indexOf('#') > -1) { text.replace(/\#/g, '')}

    needle(url + text, (err, resp, body) => {
        if(!err){
        	resolve(
        		body.images[0]
        	)
        } else {
        	reject('kayaknya error')
        }
    })
})

Nulis(process.argv.slice(2).join(' ')).then(data => console.log('.')).catch(err => console.log(err))
module.exports = Nulis