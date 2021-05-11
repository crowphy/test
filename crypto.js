const crypto = require('crypto');
const uuid = require('node-uuid');

const md5 = crypto.createHash('md5');

const uid = uuid.v4()
console.log('uuid:', uid);
console.log('md5:', md5.update(uid).digest('hex'));