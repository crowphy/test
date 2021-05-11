const crypto = require('crypto');
const uuid = require('node-uuid');

const md5 = crypto.createHash('md5');

const uid = uuid.v4()
console.log('uuid:', uid);
console.log('md5:', md5.update('b061c140-cf8b-425e-98a9-ad1f50107a6e').digest('hex'));