const bcrypt = require('bcrypt');
const fun = []; //ประกาศตัว function ทั้งหมด ของ fun

    // * เข้ารหัส ( register )
fun.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
    
};
    // * ตรวจสอบ password (Check password)
// fun.checkPassword = async (password, passwordDB) => {
//     console.log(password, passwordDB)
//     const isValid = await bcrypt.compare(password, passwordDB);
//     console.log(isValid)
//     return isValid;
// };

module.exports = fun;

// function dataEn(text) {
//     console.log('input Data' + ' : ' + text );
//     let salt = generateSalt(5);
//     let hash = md5( text + salt );
//     let SH = salt + hash;
//     let encode = Buffer.from(SH).toString('base64');
//     return encode;
// }

// function generateSalt(len) {
//     let set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
//     setLen = set.length,
//     salt = '';
//     for (var i = 0; i < len; i++ ) {
//         let p = Math.floor(Math.random() * setLen);
//         salt += set[p];
//     }
//     return salt;
// }

// function md5(string) {
//     return crypto.createHash('md5').update(string).digest('hex');
// }

// module.exports = dataEn;