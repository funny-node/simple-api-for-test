const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());

const main = ctx => {
  ctx.response.body = {
    age: 30,
    name: 'fish',
  }
};

app.use(main);
app.listen(9999);
console.log('go to http://localhost:9999/');