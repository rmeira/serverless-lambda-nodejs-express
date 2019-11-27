const app = require('./src/app')
const servelessExpress = require('aws-serverless-express')

const server = servelessExpress.createServer(app)

module.exports.hanlder = (event, context) => {
    servelessExpress.proxy(server, event, context)
}