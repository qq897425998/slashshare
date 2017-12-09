/**
 * Author:    Michael
 * Version    V1.0
 * Date:      2017-12-10 02:07
 * Description: fetch  get请求简单封装
 *
 * Modification  History:
 * Date            Author                Version            Description
 * ------------------------------------------------------------------------
 * 2017-12-10      Michael              1.0                 1.0
 * Why & What is modified:
 */

import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    var result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}
