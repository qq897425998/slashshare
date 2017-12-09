var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();


router.get('/api', function* (next) {
    this.body = 'test data'
});


var homeListData = require('./home/getindexinfo-login.js')
router.get('/api/homelist/:city/:page', function* (next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(5000);

