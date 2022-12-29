// SQL ORM 모듈
const { Sequelize, DataTypes } = require('sequelize');

// DB 생성
const sequelize = new Sequelize({
  dialect: 'sqlite',  // db 종류
  storage: 'database.sqlite' // 파일명
})

// Model(테이블) 생성
const Posts = sequelize.define('Posts', {
  // create(속성 정의)
  post: {
    type: DataTypes.STRING, // 문자형
    allowNull: false  // NOT NULL(필수값)
  },
})

const Userinfos = sequelize.define('Userinfos', {
  // create(속성 정의)
  name: {
    type: DataTypes.STRING, // 문자형
    allowNull: false  // NOT NULL(필수값)
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false 
  },
  sex: {
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  contact: {
    type: DataTypes.STRING, 
    allowNull: true
  },
})

module.exports = { sequelize, Posts, Userinfos }