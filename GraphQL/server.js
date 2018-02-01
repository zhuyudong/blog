import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';

import { database } from './mongodb';
import { saveInfo, fetchInfo } from './controller/info';
import { saveStudent, fetchStudent, fetchStudentDetail } from './controller/student';

database();
const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.get('/test', (ctx, next) => {
  ctx.body = 'test page';
});

// router.get('/info', fetchInfo);
// router.post('/save-info', saveInfo);
// router.get('/student', fetchStudent);
// router.post('/save-student', saveStudent);
// router.get('/student-detail', fetchStudentDetail);
const GraphqlRouter = require('./router');
router.use('', GraphqlRouter.routes());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => {
  console.log('GraphQL server listen port: 4000');
});

