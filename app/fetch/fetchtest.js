/**
 * Author:    Michael
 * Version    V1.0
 * Date:      2017-12-10 02:07
 * Description:
 *
 * Modification  History:
 * Date            Author                Version            Description
 * ------------------------------------------------------------------------
 * 2017-12-10      Michael              1.0                 1.0
 * Why & What is modified:
 */



export function getData() {
    let result = fetch('/api',{
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    result.then(res =>{
        return res.text()
    }).then(text=>{
        console.log(text)
    })

    // '/api/2' 获取json
    let result1 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export  function postData() {
    // '/api/post' 提交数据
    let result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: "a=100&b=200"
    });

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

