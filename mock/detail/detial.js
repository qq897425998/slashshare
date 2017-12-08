module.exports = {
    code: 0,
    errmsg: "",
    data: {
        islogin: true,

        vedio:{
            src : "/../xxxxx.mp4",
            hour: 30, //视频时长 30min
            // p: [1080,720,480,自动]
            up_num:10000, //点赞数
            down_num: 2000, //被踩数
            looked_num: 1000000, //被观看次数
            ctime: "2017-1-1-13:00",//发布时间

            tubetitle: "" //频道信息

        },
        commit:{
            num: 1000,//评论数
            list:[
                {
                    user: "小红",
                    content: "涨知识，讲的不错",
                    ctime: "2017-1-1-13:00",//评论时间
                    reply:[
                        {
                            user: "小白",
                            content: "什么不错，很烂",
                            ctime: "2017-1-1-13:04",//回复时间
                        },
                        {
                            user: "小黑",
                            content: "什么不错，很烂",
                            ctime: "2017-1-1-13:04",//回复时间
                        }
                    ]
                },
                {
                    user: "小红",
                    content: "涨知识，讲的不错",
                    ctime: "2017-1-1-13:00",//评论时间
                    reply:[
                        {
                            user: "小白",
                            content: "什么不错，很烂",
                            ctime: "2017-1-1-13:04",//回复时间
                        },
                        {
                            user: "小黑",
                            content: "什么不错，很烂",
                            ctime: "2017-1-1-13:04",//回复时间
                        }
                    ]
                }
            ]

        }

    }


}