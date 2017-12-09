/**
 * Author:    Michael
 * Version    V1.0
 * Date:      2017-12-10 02:07
 * Description: fetch  post请求简单封装
 *
 * Modification  History:
 * Date            Author                Version            Description
 * ------------------------------------------------------------------------
 * 2017-12-10      Michael              1.0                 1.0
 * Why & What is modified:
 */

/**
 * 发送 post 请求
 */
export function post(url,paramsObj) {
    let result = fetch(url,{
        method: 'POST',
        credentials: 'include',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    })
}

/**
 * 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
 * @param obj
 * @returns {string}
 */
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }
    return result;
}