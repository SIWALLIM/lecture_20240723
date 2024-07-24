const mongoose = require('mongoose')

function connectDB(){
    //몽구스라는 라이브러리를 통해 우리가만든 몽고와 DB와 연결할 거임
    mongoose.connect(process.env.MONGODB_URI)
}

module.exports = connectDB