const crypto = require('crypto');

/*
try {
  const crypto = require('crypto');
} catch (err) {
  console.log('not support');
}
//*/

/* Hash */
const md5 = crypto.createHash('md5');
const result = md5.update('password').digest('hex');
// 36位
console.log(result); // 5f4dcc3b5aa765d61d8327deb882cf99
// 随机盐
function getRandomSalt() {
  return Math.random().toString().slice(2, 5);
}
// 密码加盐
function cryptPwd(password, salt = getRandomSalt()) {
  const saltPassword = password + ':' + salt;
  const md5 = crypto.createHash('md5');
  const result = md5.update(saltPassword).digest('hex');
  console.log(result);
  return result;
}
cryptPwd('jk123456');
// md5碰撞 https://www.jianshu.com/p/c9089fd5b1ba
function getHashResult(hexString) {
  hexString = hexString.replace(/(\w{2,2})/g, 'ox$1 ').trim();
  const arr = hexString.split(' ');
  const buff = Buffer.from(arr);
  const hash = crypto.createHash('md5');
  const result = hash.update(buff).digest('hex');
  return result;
}
const result1 = getHashResult('d131dd02c5e6eec4693d9a0698aff95c2fcab58712467eab4004583eb8fb7f8955ad340609f4b30283e488832571415a085125e8f7cdc99fd91dbdf280373c5bd8823e3156348f5bae6dacd436c919c6dd53e2b487da03fd02396306d248cda0e99f33420f577ee8ce54b67080a80d1ec69821bcb6a8839396f9652b6ff72a70');
const result2 = getHashResult('d131dd02c5e6eec4693d9a0698aff95c2fcab50712467eab4004583eb8fb7f8955ad340609f4b30283e4888325f1415a085125e8f7cdc99fd91dbd7280373c5bd8823e3156348f5bae6dacd436c919c6dd53e23487da03fd02396306d248cda0e99f33420f577ee8ce54b67080280d1ec69821bcb6a8839396f965ab6ff72a70');
if (result1 === result2) {
  console.log('same', result1);
} else {
  console.log('not same');
}

/* HMAC */
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash); // c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

/* Certificate */
const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
console.log(cert1);
console.log(cert2);


// console.log(Object.getOwnPropertyNames(crypto));
/**
 * [ 'DEFAULT_ENCODING',
  'constants',
  '_toBuf',
  'Hash',
  'createHash',
  'Hmac',
  'createHmac',
  'Cipher',
  'createCipher',
  'Cipheriv',
  'createCipheriv',
  'Decipher',
  'createDecipher',
  'Decipheriv',
  'createDecipheriv',
  'Sign',
  'createSign',
  'Verify',
  'createVerify',
  'publicEncrypt',
  'publicDecrypt',
  'privateEncrypt',
  'privateDecrypt',
  'DiffieHellman',
  'createDiffieHellman',
  'getDiffieHellman',
  'createDiffieHellmanGroup',
  'DiffieHellmanGroup',
  'ECDH',
  'createECDH',
  'pbkdf2',
  'pbkdf2Sync',
  'Certificate',
  'setEngine',
  'randomFillSync',
  'randomFill',
  'pseudoRandomBytes',
  'randomBytes',
  'prng',
  'rng',
  'getCiphers',
  'getHashes',
  'getCurves',
  'fips',
  'timingSafeEqual',
  'createCredentials',
  'Credentials' ]
 */