import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import { saveInfo, fetchInfo } from '../controller/info';
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controller/student';

const router = require('koa-router')();

router
  .get('/info', fetchInfo)
  .post('/save-info', saveInfo)
  .get('/student', fetchStudent)
  .post('/save-student', saveStudent)
  .get('/student-detail', fetchStudentDetail)
  .get('/graphql', async (ctx, next) => {
    await graphiqlKoa({endpointURL: '/graphql'})(ctx, next);
  });

module.exports = router;