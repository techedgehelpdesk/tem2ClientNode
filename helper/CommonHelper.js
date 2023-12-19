const commonFunc = class CommonCls {
  constructor() {
    this.jwt = require("jsonwebtoken");
    this.bcrypt = require("bcrypt");
    const Cryptr = require("cryptr");
    this.cryptr = new Cryptr("1");
    // this.nodefetch = require("node-fetch");
    this.ejs = require("ejs");
    this.path = require("path");
  }
  // For Token Creation
  createToken(userdtls) {
    let jwtToken = this.jwt.sign(
      userdtls,
      'RGHKSPOUYTGDHSDHIWHILMSLI6SADSBHJNWUEWESDFGVBKJ',
      {
        algorithm: 'HS256',
        expiresIn: "1h",
      }
    );
    return jwtToken;
  }
  // view token content

  viewTokenContent(token) {
    try {
      let that = this;
      let decoded = that.jwt.decode(token);
      return decoded;
    } catch (error) {
      return false;
    }
  }

  // For Password Encryption
  hashPassword(passsword) {
    let salt = this.bcrypt.genSaltSync(10);
    let hash = this.bcrypt.hashSync(passsword, salt);
    return hash;
  }

  // id encryption
  encryptId(id) {
    const encryptedId = this.cryptr.encrypt(id);
    return encryptedId;
  }

  // ID Decryption
  decryptId(encId) {
    const decryptedId = this.cryptr.decrypt(encId);
    return decryptedId;
  }
};
module.exports = commonFunc;
