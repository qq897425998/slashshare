/**
 * Author:    Michael
 * Version    V1.0
 * Date:      2017/12/10 02:33
 * Description:
 *
 * Modification  History:
 * Date            Author                Version            Description
 * ------------------------------------------------------------------------
 * 2017/12/10      Michael              1.0                 1.0
 * Why & What is modified:
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'


// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

// 测试 fetch 的功能
import { getData, postData } from './fetch/test.js'
// import { getData, postData } from './fetch/data.js'
getData();
postData();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)