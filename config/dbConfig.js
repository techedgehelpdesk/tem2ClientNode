module.exports = {
    HOST:'localhost',
    USER:'root',
    PASSWORD:'',
    DB:'tem2New',
    dialset:'mysql',

    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

}