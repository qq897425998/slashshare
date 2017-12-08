module.exports = {
    code: 0, // 0 代表成功   其他的错误:如页面存在直接返回 404  服务器内部错误500 直接按错误代码返回  服务端catch错误并填写errmsg
    errmsg: "",
    data: {
        islogin: true,

        name: "Michael",
        email: "tang1992xin@gmail.com",
        feed: [
            {name: "订阅名称", num: 100},
            {name: "小明分享", num: 123},
            {name: "abc的分享", num: 411},
            {name: "华华知识工作室", num: 10},
        ],
        list: [
            {
                type: "推荐视频(recommend)",
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },
            {
                type: "最近上传的视频-为您推荐的视频(recommend-recently)",
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },
            {
                type: "小明分享-这是为您推荐的频道(recommend-tube)",
                feednum: 100, //订阅数
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },
            {
                type: "继续观看(go-on)",
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },

            {
                type: "视频集合推荐(recommend-set-vedio)",
                setnum: 20, //该集合视频数量
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },
            {
                type: "再看一遍(read-again)",
                sublist: [
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    },
                    {
                        detialurl: "/detial/xxxx",
                        title: "react-router讲解",
                        author: "小明",
                        pv: 41100, //播放量
                        ctime: "2017-1-1 4:00",//创建时间
                    }
                ]
            },
        ]
    }
}