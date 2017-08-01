const host = 'http://v3.wufazhuce.com:8000'
const wxRequest = (params, url) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      params.success && params.success(res)
      wx.hideToast()
    },
    fail: (res) => {
      params.fail && params.fail(res)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
}

// Index
const getVolById = (params) => wxRequest(params, host + '/api/hp/detail/' + params.query.id)
const getVolIdList = (params) => wxRequest(params, host + '/api/hp/idlist/0')
const getVolsByMonth = (params) => wxRequest(params, host + '/api/hp/bymonth/' + params.query.month)
const getVolDetailById = (params) => wxRequest(params, host + '/api/hp/detail/' + params.query.id)

// Reading
const getCarousel = (params) => wxRequest(params, host + '/api/reading/carousel')
const getLastArticles = (params) => wxRequest(params, host + '/api/reading/index')
const getEssayById = (params) => wxRequest(params, host + '/api/essay/' + params.query.id)
const getSerialById = (params) => wxRequest(params, host + '/api/serialcontent/' + params.query.id)
const getQuestionById = (params) => wxRequest(params, host + '/api/question/' + params.query.id)
const getArticlesByMonth = (params) => {
  wxRequest(params, host + '/api/' + params.query.type + '/bymonth/' + params.query.month)
}

// Music
const getMusicIdList = (params) => wxRequest(params, host + '/api/music/idlist/0')
const getMusicsByMonth = (params) => wxRequest(params, host + '/api/music/bymonth/' + params.query.month)
const getMusicDetailById = (params) => wxRequest(params, host + '/api/music/detail/' + params.query.id)

// Movie
const getMovieListById = (params) => wxRequest(params, host + '/api/movie/list/' + params.query.id)
const getMovieDetailById = (params) => wxRequest(params, host + '/api/movie/detail/' + params.query.id)
const getMovieStoryById = (params) => wxRequest(params, host + '/api/movie/' + params.query.id + '/story/1/0')

const carousel = {
  "res": 0,
  "data": [
    {
      "id": "128",
      "title": "潜能Skinner",
      "cover": "http://image.wufazhuce.com/FqFj7Sk0JvJSVMzbc0JFgu0BrBaa",
      "bottom_text": "世界上到底有没有成功的催眠大师？",
      "bgcolor": "#d7560f",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/128"
    },
    {
      "id": "127",
      "title": "这一年过的如何？",
      "cover": "http://image.wufazhuce.com/Fr_r7e50MifiPsyWbFhsvcY3mfk_",
      "bottom_text": "“梦短梦长俱是梦，年来年去是何年。”",
      "bgcolor": "#24423A",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/127"
    },
    {
      "id": "126",
      "title": "我们生来就是孤独",
      "cover": "http://image.wufazhuce.com/FgUR18YWpOjS1p9t0ey_RxDSKzR3",
      "bottom_text": "“不管你拥有什么，我们生来就是孤独。”",
      "bgcolor": "#1c2454",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/126"
    },
    {
      "id": "125",
      "title": "这一切并没有那么糟",
      "cover": "http://image.wufazhuce.com/Fj_ePRtSc7yyPL3tf9kcQlhKdm0y",
      "bottom_text": "“以前觉得，勇敢就是粗暴地面对恐惧。后来发现，温柔也是勇敢。”",
      "bgcolor": "#124fa2",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/125"
    },
    {
      "id": "124",
      "title": "七堇年专题",
      "cover": "http://image.wufazhuce.com/FgDYdRk3BWNtbCtjkKIU5vo-ZWFP",
      "bottom_text": "“就让我们继续与生命的慷慨与繁华相爱；即使岁月以刻薄与荒芜相欺。”",
      "bgcolor": "#393135",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/124"
    },
    {
      "id": "123",
      "title": "你再不来，我要下雪了",
      "cover": "http://image.wufazhuce.com/Ftgg6J7j3qldjC_qDirU4x-OYFLp",
      "bottom_text": "拥抱着就能取暖，依偎着便能生存。",
      "bgcolor": "#f7bfbb",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/123"
    }
  ]
}
let articles = {
  "res": 0,
  "data": {
    "essay": [
      {
        "content_id": "2692",
        "hp_title": "和那时寂寞的自己喝上几罐啤酒",
        "hp_makettime": "2017-07-30 06:00:00",
        "guide_word": "“有的人只是想回到过去，和那时寂寞的自己喝上几罐啤酒。”",
        "start_video": "",
        "author": [
          {
            "user_id": "7654034",
            "user_name": "黄集伟",
            "desc": "黄集伟，专栏作者，曾有“阅读笔记”系列、“语词笔记”系列、《孤岛访谈录》等闲书出版。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "黄集伟，专栏作者。",
            "fans_total": "2489",
            "web_url": "http://image.wufazhuce.com/FvVmWbqlle7jlUCTeozoval9NyBH"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7654034",
            "user_name": "黄集伟",
            "desc": "黄集伟，专栏作者，曾有“阅读笔记”系列、“语词笔记”系列、《孤岛访谈录》等闲书出版。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "黄集伟，专栏作者。",
            "fans_total": "2489",
            "web_url": "http://image.wufazhuce.com/FvVmWbqlle7jlUCTeozoval9NyBH"
          }
        ]
      },
      {
        "content_id": "2686",
        "hp_title": "那个人的脸孔",
        "hp_makettime": "2017-07-30 06:00:00",
        "guide_word": "所有生命里的灾厄，曾像乌云，或者业障，将她逼上绝路，又使她死而后生。",
        "start_video": "",
        "author": [
          {
            "user_id": "7671727",
            "user_name": "陈雪",
            "desc": "小说《蝴蝶》曾被香港导演麦婉欣改编成同名电影，著有《恋爱课》《台妹时光》《人妻日记》《迷宫中的恋人》等，微信公众号：小说家陈雪（ID：twchenxue）。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家",
            "fans_total": "463",
            "web_url": "http://image.wufazhuce.com/Fu6o0fqKHsI_TjdpPX3N2Kc99vNP"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7671727",
            "user_name": "陈雪",
            "desc": "小说《蝴蝶》曾被香港导演麦婉欣改编成同名电影，著有《恋爱课》《台妹时光》《人妻日记》《迷宫中的恋人》等，微信公众号：小说家陈雪（ID：twchenxue）。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家",
            "fans_total": "463",
            "web_url": "http://image.wufazhuce.com/Fu6o0fqKHsI_TjdpPX3N2Kc99vNP"
          }
        ]
      },
      {
        "content_id": "2672",
        "hp_title": "软糖| “房间” _ 莴苣姑娘",
        "hp_makettime": "2017-07-30 06:00:00",
        "guide_word": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
        "start_video": "",
        "author": [
          {
            "user_id": "7798097",
            "user_name": "Moeder Lin",
            "desc": "半调人间。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "半调人间。",
            "fans_total": "675",
            "web_url": "http://image.wufazhuce.com/Fk0D_VpNeEI_ptgbUMOrVdhJh__V"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7798097",
            "user_name": "Moeder Lin",
            "desc": "半调人间。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "半调人间。",
            "fans_total": "675",
            "web_url": "http://image.wufazhuce.com/Fk0D_VpNeEI_ptgbUMOrVdhJh__V"
          }
        ]
      },
      {
        "content_id": "2695",
        "hp_title": "相亲时，你根本不知道对面坐的是不是一条狗",
        "hp_makettime": "2017-07-29 06:00:00",
        "guide_word": "相亲的整个过程，与其说是为了培养爱情，倒不如说是一场以结婚为目的的谈判。",
        "start_video": "",
        "author": [
          {
            "user_id": "7898995",
            "user_name": "李开春",
            "desc": "爱国儿女，鸡汤爱好者，不务正业的理工女。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "爱国儿女，鸡汤爱好者，不务正业的理工女。",
            "fans_total": "1418",
            "web_url": "http://image.wufazhuce.com/FuCd1X9lLbWuu3Ps_aoMd8vJjQml"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7898995",
            "user_name": "李开春",
            "desc": "爱国儿女，鸡汤爱好者，不务正业的理工女。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "爱国儿女，鸡汤爱好者，不务正业的理工女。",
            "fans_total": "1418",
            "web_url": "http://image.wufazhuce.com/FuCd1X9lLbWuu3Ps_aoMd8vJjQml"
          }
        ]
      },
      {
        "content_id": "2693",
        "hp_title": "此去经年",
        "hp_makettime": "2017-07-29 06:00:00",
        "guide_word": "人生没有如果，只有结果。",
        "start_video": "",
        "author": [
          {
            "user_id": "4813530",
            "user_name": "张皓宸",
            "desc": "作家、编剧，「一个」常驻作者。@张皓宸",
            "wb_name": "@张皓宸",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家、编剧，「一个」常驻作者。@张皓宸",
            "fans_total": "13177",
            "web_url": "http://image.wufazhuce.com/Fth0eY24_Bu3I-o0T5LCRB-QzvCo"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4813530",
            "user_name": "张皓宸",
            "desc": "作家、编剧，「一个」常驻作者。@张皓宸",
            "wb_name": "@张皓宸",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家、编剧，「一个」常驻作者。@张皓宸",
            "fans_total": "13177",
            "web_url": "http://image.wufazhuce.com/Fth0eY24_Bu3I-o0T5LCRB-QzvCo"
          }
        ]
      },
      {
        "content_id": "2681",
        "hp_title": "软糖| “房间” _ GET OUT!",
        "hp_makettime": "2017-07-29 06:00:00",
        "guide_word": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
        "start_video": "",
        "author": [
          {
            "user_id": "7742828",
            "user_name": "双麒_宋 ",
            "desc": "因爱而画，美好的作品产生于最压抑的欲望。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "因爱而画，美好的作品产生于最压抑的欲望。",
            "fans_total": "1414",
            "web_url": "http://image.wufazhuce.com/FoPpyeue8ajoRlZ4Fy39a56o4NO-"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7742828",
            "user_name": "双麒_宋 ",
            "desc": "因爱而画，美好的作品产生于最压抑的欲望。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "因爱而画，美好的作品产生于最压抑的欲望。",
            "fans_total": "1414",
            "web_url": "http://image.wufazhuce.com/FoPpyeue8ajoRlZ4Fy39a56o4NO-"
          }
        ]
      },
      {
        "content_id": "2678",
        "hp_title": "软糖| “房间” _ 风景",
        "hp_makettime": "2017-07-29 06:00:00",
        "guide_word": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
        "start_video": "",
        "author": [
          {
            "user_id": "7817935",
            "user_name": "郑南七白",
            "desc": "茶凉粉乐队主唱，爱唱歌爱画画。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "茶凉粉乐队主唱，爱唱歌爱画画。",
            "fans_total": "1122",
            "web_url": "http://image.wufazhuce.com/Foa4FsH62qfHLKNdCRV0bEqOIJhW"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7817935",
            "user_name": "郑南七白",
            "desc": "茶凉粉乐队主唱，爱唱歌爱画画。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "茶凉粉乐队主唱，爱唱歌爱画画。",
            "fans_total": "1122",
            "web_url": "http://image.wufazhuce.com/Foa4FsH62qfHLKNdCRV0bEqOIJhW"
          }
        ]
      },
      {
        "content_id": "2691",
        "hp_title": "比起我月入16w的网红妹妹，我更喜欢月薪1w的自己",
        "hp_makettime": "2017-07-28 06:00:00",
        "guide_word": "做不了喜欢的事儿，当玉皇大帝也不会开心哪。",
        "start_video": "",
        "author": [
          {
            "user_id": "7888901",
            "user_name": "青年狒狒",
            "desc": "生活在当代中国，一个积极要求进步的青年狒狒。",
            "wb_name": "@Steffi-",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "瓦是一只狒狒。",
            "fans_total": "585",
            "web_url": "http://image.wufazhuce.com/FjT4Dg8RgCutKBzS8Y_5pMPueZkA"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7888901",
            "user_name": "青年狒狒",
            "desc": "生活在当代中国，一个积极要求进步的青年狒狒。",
            "wb_name": "@Steffi-",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "瓦是一只狒狒。",
            "fans_total": "585",
            "web_url": "http://image.wufazhuce.com/FjT4Dg8RgCutKBzS8Y_5pMPueZkA"
          }
        ]
      },
      {
        "content_id": "2688",
        "hp_title": "意外之财 ",
        "hp_makettime": "2017-07-28 06:00:00",
        "guide_word": "她喜欢这种被包裹的感觉，温软绵实，这从子宫带来的记忆。",
        "start_video": "",
        "author": [
          {
            "user_id": "7896082",
            "user_name": "龙伟平",
            "desc": "龙伟平，青年作者，画画的。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "龙伟平，青年作者，画画的。",
            "fans_total": "287",
            "web_url": "http://image.wufazhuce.com/Fg7Y7OLchHkfUyzMFACxCm8ch1uc"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "7896082",
            "user_name": "龙伟平",
            "desc": "龙伟平，青年作者，画画的。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "龙伟平，青年作者，画画的。",
            "fans_total": "287",
            "web_url": "http://image.wufazhuce.com/Fg7Y7OLchHkfUyzMFACxCm8ch1uc"
          }
        ]
      },
      {
        "content_id": "2679",
        "hp_title": "软糖| “房间” _ 独处型小动物",
        "hp_makettime": "2017-07-28 06:00:00",
        "guide_word": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
        "start_video": "",
        "author": [
          {
            "user_id": "7750988",
            "user_name": "gantea",
            "desc": "散步很重要。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "散步很重要。",
            "fans_total": "1280",
            "web_url": "http://image.wufazhuce.com/FptOCSRMdhs54yVvErdMgGzlGyta"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7750988",
            "user_name": "gantea",
            "desc": "散步很重要。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "散步很重要。",
            "fans_total": "1280",
            "web_url": "http://image.wufazhuce.com/FptOCSRMdhs54yVvErdMgGzlGyta"
          }
        ]
      }
    ],
    "serial": [
      {
        "id": "376",
        "serial_id": "45",
        "number": "17",
        "title": "地才余小多（17）·白云苍狗",
        "excerpt": "我忘了重要的东西，我改期，不用再喊我，也不用等我了。",
        "read_num": "12500",
        "maketime": "2017-07-29 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7692002",
          "user_name": "焦冲",
          "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "青年作家",
          "fans_total": "1894",
          "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7692002",
            "user_name": "焦冲",
            "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "青年作家",
            "fans_total": "1894",
            "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
          }
        ],
        "serial_list": [
          "345",
          "346",
          "348",
          "349",
          "350",
          "354",
          "355",
          "358",
          "359",
          "362",
          "364",
          "367",
          "368",
          "369",
          "374",
          "375",
          "376"
        ]
      },
      {
        "id": "373",
        "serial_id": "44",
        "number": "24",
        "title": "潜能Xanadu·Party7",
        "excerpt": "你可以让这雨，不要落下吗？",
        "read_num": "5900",
        "maketime": "2017-07-28 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "3200",
          "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "3200",
            "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
          }
        ],
        "serial_list": [
          "329",
          "331",
          "333",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "347",
          "351",
          "352",
          "353",
          "356",
          "357",
          "360",
          "361",
          "363",
          "365",
          "366",
          "370",
          "371",
          "372",
          "373"
        ]
      },
      {
        "id": "375",
        "serial_id": "45",
        "number": "16",
        "title": "地才余小多（16）·未曾爱过谁",
        "excerpt": "我最大的遗憾就是未曾爱过，我的使命就是为我妈报仇，但我不后悔。",
        "read_num": "17600",
        "maketime": "2017-07-27 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7692002",
          "user_name": "焦冲",
          "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "青年作家",
          "fans_total": "1894",
          "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7692002",
            "user_name": "焦冲",
            "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "青年作家",
            "fans_total": "1894",
            "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
          }
        ],
        "serial_list": [
          "345",
          "346",
          "348",
          "349",
          "350",
          "354",
          "355",
          "358",
          "359",
          "362",
          "364",
          "367",
          "368",
          "369",
          "374",
          "375",
          "376"
        ]
      },
      {
        "id": "372",
        "serial_id": "44",
        "number": "23",
        "title": "潜能Xanadu·Party7",
        "excerpt": "对不起，我想世界可能真的要末日了。",
        "read_num": "8800",
        "maketime": "2017-07-26 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "3200",
          "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "3200",
            "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
          }
        ],
        "serial_list": [
          "329",
          "331",
          "333",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "347",
          "351",
          "352",
          "353",
          "356",
          "357",
          "360",
          "361",
          "363",
          "365",
          "366",
          "370",
          "371",
          "372",
          "373"
        ]
      },
      {
        "id": "374",
        "serial_id": "45",
        "number": "15",
        "title": "地才余小多（15）·黎明之前",
        "excerpt": "别人信不信不重要。你问心无愧就够了。",
        "read_num": "17900",
        "maketime": "2017-07-25 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7692002",
          "user_name": "焦冲",
          "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "青年作家",
          "fans_total": "1894",
          "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7692002",
            "user_name": "焦冲",
            "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "青年作家",
            "fans_total": "1894",
            "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
          }
        ],
        "serial_list": [
          "345",
          "346",
          "348",
          "349",
          "350",
          "354",
          "355",
          "358",
          "359",
          "362",
          "364",
          "367",
          "368",
          "369",
          "374",
          "375",
          "376"
        ]
      },
      {
        "id": "371",
        "serial_id": "44",
        "number": "22",
        "title": "潜能Xanadu·Party6",
        "excerpt": "所以十年前那个错误的分子式是你父亲解出的？",
        "read_num": "9500",
        "maketime": "2017-07-24 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "3200",
          "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "3201",
            "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
          }
        ],
        "serial_list": [
          "329",
          "331",
          "333",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "347",
          "351",
          "352",
          "353",
          "356",
          "357",
          "360",
          "361",
          "363",
          "365",
          "366",
          "370",
          "371",
          "372",
          "373"
        ]
      },
      {
        "id": "369",
        "serial_id": "45",
        "number": "14",
        "title": "地才余小多（14）·复仇女神",
        "excerpt": "有时候，死亡的确是一些人最后的出名时机。",
        "read_num": "17700",
        "maketime": "2017-07-22 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7692002",
          "user_name": "焦冲",
          "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "青年作家",
          "fans_total": "1894",
          "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7692002",
            "user_name": "焦冲",
            "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "青年作家",
            "fans_total": "1894",
            "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
          }
        ],
        "serial_list": [
          "345",
          "346",
          "348",
          "349",
          "350",
          "354",
          "355",
          "358",
          "359",
          "362",
          "364",
          "367",
          "368",
          "369",
          "374",
          "375",
          "376"
        ]
      },
      {
        "id": "370",
        "serial_id": "44",
        "number": "21",
        "title": "潜能Xanadu·Party6",
        "excerpt": "我感觉我待在刚刚的世界里好像再也回不来了，好像在一种永恒之中，出不去了。",
        "read_num": "10800",
        "maketime": "2017-07-21 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "3200",
          "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "3201",
            "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
          }
        ],
        "serial_list": [
          "329",
          "331",
          "333",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "347",
          "351",
          "352",
          "353",
          "356",
          "357",
          "360",
          "361",
          "363",
          "365",
          "366",
          "370",
          "371",
          "372",
          "373"
        ]
      },
      {
        "id": "368",
        "serial_id": "45",
        "number": "13",
        "title": "地才余小多（13）·预谋中的偶然",
        "excerpt": "我们能得到什么？为他们白忙活一场。",
        "read_num": "14800",
        "maketime": "2017-07-20 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7692002",
          "user_name": "焦冲",
          "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "青年作家",
          "fans_total": "1894",
          "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7692002",
            "user_name": "焦冲",
            "desc": "80后，2008年开始写作，著有《男人三十》等长篇小说多部，另有中短篇若干见于各期刊杂志，现居北京，从事新媒体运营工作。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "青年作家",
            "fans_total": "1894",
            "web_url": "http://image.wufazhuce.com/FpuDddXFvJuQBANKXmfT9r8ZXjdz"
          }
        ],
        "serial_list": [
          "345",
          "346",
          "348",
          "349",
          "350",
          "354",
          "355",
          "358",
          "359",
          "362",
          "364",
          "367",
          "368",
          "369",
          "374",
          "375",
          "376"
        ]
      },
      {
        "id": "366",
        "serial_id": "44",
        "number": "20",
        "title": "潜能Xanadu·Party6",
        "excerpt": "不，我说的是别的方面的影响。它会导致世界末日你知道吗？",
        "read_num": "9700",
        "maketime": "2017-07-19 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "3200",
          "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "3201",
            "web_url": "http://image.wufazhuce.com/FiLEZKk30tI-P2DfODFz9VuL3P50"
          }
        ],
        "serial_list": [
          "329",
          "331",
          "333",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "347",
          "351",
          "352",
          "353",
          "356",
          "357",
          "360",
          "361",
          "363",
          "365",
          "366",
          "370",
          "371",
          "372",
          "373"
        ]
      }
    ],
    "question": [
      {
        "question_id": "1808",
        "question_title": "只想和成熟的大叔谈恋爱，该有怎么样的心理准备？",
        "answer_title": "",
        "answer_content": "越长得大我越觉得，人的成长，其实就是摆正自己位置的过程，婚姻也是。",
        "question_makettime": "2017-07-30 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "8039994",
            "user_name": "万方中",
            "desc": "万方中，自由撰稿人，策划营销师。微信公众号：方独",
            "wb_name": "@万方中",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "自由撰稿人，策划营销师。微信公众号：方独",
            "fans_total": "130",
            "web_url": "http://image.wufazhuce.com/FvXfSsY9nCPTOra4U1F9ZpA4q8uQ"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "媛媛",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1807",
        "question_title": "对梦想的热情有多重要？",
        "answer_title": "",
        "answer_content": "每一种“得到”，都需要足够的筹码去换取。",
        "question_makettime": "2017-07-29 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "8197576",
            "user_name": "橘来小姐",
            "desc": "一枚傲娇敏感的狮子女，静若瘫痪，动若癫痫。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "业余文字爱好者，不吃葱蒜姜联盟盟主。",
            "fans_total": "238",
            "web_url": "http://image.wufazhuce.com/FnUWIPNHL7owC2siazx3hN36n5Pi"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "江国不香织",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1805",
        "question_title": "假使你喜欢的人只想睡你，并不想和你在一起，你会怎么办？",
        "answer_title": "",
        "answer_content": "你把自己摆在一个免费试用的位置上了，就不要怪别人消费你。",
        "question_makettime": "2017-07-28 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "4813463",
            "user_name": "老王子",
            "desc": "作家，广告人。@新老王子",
            "wb_name": "@新老王子",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家，广告人。@新老王子",
            "fans_total": "383",
            "web_url": "http://image.wufazhuce.com/FgegDExkkeP8izCd3fkGKRwoyKiS"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "小姐你也不吃青椒吗",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1803",
        "question_title": "为什么有的人洗澡需要别人帮忙搓背？",
        "answer_title": "",
        "answer_content": "去澡堂搓澡就像大家每天都打扫卫生，可还需要大扫除一样。",
        "question_makettime": "2017-07-27 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "8185629",
            "user_name": "行尸走肥肉",
            "desc": "一位拥有三双拖鞋的便衣诗人。",
            "wb_name": "@行尸走肥肉",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "一位拥有三双拖鞋的便衣诗人。",
            "fans_total": "66",
            "web_url": "http://image.wufazhuce.com/FiE2WkXRL8Vf3k1683CDDgU7VqgM"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "瞿麦",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1804",
        "question_title": "为什么恋人们会选择用伤害自己的方式惩罚对方?",
        "answer_title": "",
        "answer_content": "除了自我伤害，她也没有更好的办法，让别人正视她的绝望。",
        "question_makettime": "2017-07-26 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "4814790",
            "user_name": "李松蔚",
            "desc": "李松蔚，大学讲师，心理咨询师。",
            "wb_name": "@李松蔚PKU",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "李松蔚，大学讲师，心理咨询师。",
            "fans_total": "263",
            "web_url": "http://image.wufazhuce.com/FkE8x68taWccJXlH-1xx6sjfKh7V"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "潘娜索",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1802",
        "question_title": "贫穷的童年对以后的人生影响有多大？",
        "answer_title": "",
        "answer_content": "隔着漫长的岁月，我们终于可以伸出手来，拭去那个穷孩子脸上的泪痕。",
        "question_makettime": "2017-07-25 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "4813779",
            "user_name": "慕容素衣",
            "desc": "媒体人，80后写作者。",
            "wb_name": "@慕容素衣ym",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "媒体人，80后写作者。",
            "fans_total": "1610",
            "web_url": "http://image.wufazhuce.com/FtPouYwZ9zvhd9RDbWoxKSSyA1V1"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "维多利亚发光水母",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1801",
        "question_title": "你最深刻的一次分手场景是怎么样的？",
        "answer_title": "",
        "answer_content": "你重重放在心底的东西，总有人能够轻巧地抛下。",
        "question_makettime": "2017-07-24 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "网友",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "一个App工作室",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1800",
        "question_title": "第一次吃抗精神药丸是什么体验？",
        "answer_title": "",
        "answer_content": "醒来第一个感觉就是，想爆粗口，庆幸自己还活着，真特么的美好！",
        "question_makettime": "2017-07-23 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "8175903",
            "user_name": "双相躁郁世界",
            "desc": "公众号“双相躁郁世界（bipolar_world）”致力于帮助双相情感障碍、抑郁症等患者与其家人，致力于科普、相互交流、提供互助信息，同时我们提供给大家一个温暖的避风港，在这里你可以发挥自己的才华，也可以听到美妙的声音，看到与病情相关的影视介绍，了解有关书籍等等。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "ID：bipolar_world",
            "fans_total": "240",
            "web_url": "http://image.wufazhuce.com/Fo0L1dVYZCYZUe2nNC456bcC1GEt"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "丧小猪",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1795",
        "question_title": "都说读书无用，那么有什么功利高效的读书方法？ ",
        "answer_title": "",
        "answer_content": "好的方法，都是反人性的。",
        "question_makettime": "2017-07-22 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "8161929",
            "user_name": "古典",
            "desc": "古典，三百万册畅销书《拆掉思维里的墙》作者，罗辑思维得到专栏“超级个体”主理人。新精英生涯公司创始人。最新作品《跃迁：成为高手的技术》已全面上线。",
            "wb_name": "@古典",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "新精英创始人、全球职业规划师。",
            "fans_total": "316",
            "web_url": "http://image.wufazhuce.com/FliuAySelCaFB--oCJwL1IBG0fVW"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "Lush",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1799",
        "question_title": "怎样看待“中国式相亲价目表”？",
        "answer_title": "",
        "answer_content": "搜索成本才是真爱最大的敌人。",
        "question_makettime": "2017-07-21 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "7566818",
            "user_name": "温义飞",
            "desc": "有时也会迷惑，人们爱的究竟是我的美貌还是我的才华。 ",
            "wb_name": "@Blake老实人",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "温义飞，ONE热门回答者。",
            "fans_total": "452",
            "web_url": "http://image.wufazhuce.com/FjN55lHN2vK5VgA5c1c8opFeUrG1"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "juice Lin",
            "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      }
    ]
  }
}
const musics = [{
    "id": "2270",
    "title": "残酷月光",
    "cover": "http://image.wufazhuce.com/FjtSK6_x8j2k0ZQv39-MFrvva4IJ",
    "isfirst": "0",
    "story_title": "愿我们雨过天晴，晨曦依旧",
    "story": "\n<h2 style=\"text-align: center;\"><strong>01.</strong></h2>\n<p>今天下午，闲来无事，我又想起了西风，驾轻就熟地打开了网页收藏夹，找到了他的空间，点开来看，欣喜的是他的空间我又可以访问了，只是还没高兴过五分钟，我在他的相册里看到了他的结婚照，以及最近一次在海边拍的照片，照片很美，里面有我喜欢的大海、有我想去的天涯海角、有我爱的西风，可就是没有我。</p>\n<p>那一瞬间，我终于明白，我和西风再无可能，从此以后，我们是最熟悉的陌生人。</p>\n<p>随后，我发了一条朋友圈，内容是“从今以后，我不再写你，不再想你，愿我们雨过天晴，晨曦依旧。”，这句话是我听来的，但却完全是我当下心情的写照，看着西风这么幸福，我想，我应该放下他了。</p>\n<p>只是从今以后，再也没有一个人会在我过生日的时候硬要带我去吃大餐给我买礼物了，再也没有一个人只要我一个电话他就会随叫随到了，再也没有一个人会给我买我最爱吃的南瓜酥了，再也没有一个人会与我立黄昏问我粥可温了，再也没有一个人会对我这般好了。</p>\n<p>人啊，总是在失去后才追悔莫及，而我也没能例外。</p>\n<h2 style=\"text-align: center;\"><strong>02.</strong></h2>\n<p>我和西风是大学同班同学，他是我众多追求者中的一员，也是对我最好最无微不至的一个人。当时的我是系学生会的文艺部部长，受到很多人的追捧，却也因此骄傲自满。那时的我坚信将来与我共赴一生的人，必定是一个传说中的高富帅。</p>\n<p>久而久之，那些曾经给我鲜花和掌声的人渐渐消失不见，而我也知道，很少有人能在我的无视和冷漠中坚持下来，所以我对他们的见异思迁习以为常。</p>\n<p>可偏偏西风是个例外，他独自坚持了三年，他像一颗树一样，在我的生命里站成了永恒。三年来，无论风吹雨打，他都会给我买早餐；肚子饿的时候，我一个电话打过去，他总会第一时间接起，然后去给我买吃的；每次从学校回家的路上，总有他在为我默默拿着行李；每次从家回学校的时候，他又会恰逢事宜地出现在车站接我......他总是尽他所能地对我好，让我渐渐习惯了他的存在。</p>\n<p>但这三年里，我既没有答应做他的女朋友，也没有承认他是我的男朋友，我像个地主一样无偿地剥削着占有着他的好，却从来没有给过他同等的回报。我以为我这样做会赶走西风，可他偏偏没有。</p>\n<h2 style=\"text-align: center;\"><strong>03.</strong></h2>\n<p>大四是承载着悲欢离合的一年。有的人在这一年找到一份好工作，从此走上光明的仕途之路；有的人在这一年碌碌无为，焦头烂额地忙着应付毕业论文答辩；有的情侣在这一年继续恩爱如初，毕业后双宿双飞；有的情侣在这一年一别两宽，各生欢喜。</p>\n<p>而我和西风什么都不是，所以，当我跑到苏州找到一份房产记者的实习工作时，我以为我和他要就此分别了。但令我诧异的是，西风也毅然决然地跟着我从南京来到了苏州，在一家IT公司从事着程序猿的工作。</p>\n<p>我有时候怀疑西风是不是傻，为什么放着其他好姑娘不追，却偏偏要喜欢我。</p>\n<p>我的生日在5月，那天，我本打算像往常一样下了班就回家休息，却在公司楼下看到了风尘仆仆赶来的西风。那一刻，我突然生出“蓦然回首，那人就在灯火阑珊处”的感觉。</p>\n<p>我终于没有拒绝他的邀请，任由他带着我到银饰品店买了一条月光石项链戴在了我的脖子上，又去“食本味”吃了一顿韩式料理。晚上，他像之前在南京车站送别的那样，十分绅士地送我上了回家的地铁。</p>\n<p>西风总是这样义无反顾，却别无所求。地铁上，我反复思量很久后给西风发了一个信息，说愿意做他的女朋友。没多久，我收到了他的“好”。就这样，我和西风确定了恋爱关系。</p>\n<h2 style=\"text-align: center;\"><strong>04.</strong></h2>\n<p>西风在追我前和追到我后都是一副好好先生的样子。</p>\n<p>周一到周五，他不加班的时候会来公司接我下班，然后带我去吃饭，偶尔我们还会去看场电影再各回各家。周末休息的时候，西他=总是打电话叫我去他租住的地方，然后他会拉着我去菜市场买菜，然后亲自下厨。</p>\n<p>我们会窝在房间里一起看电视，抑或各自玩各自的游戏，西风喜欢玩《保卫萝卜》，我喜欢玩《找你妹》，闯关成功后，我们总是像两个孩子一样手舞足蹈，欢呼雀跃。</p>\n<p>他从不留我过夜，傍晚吃完饭后就会送我回家，路上经过甜点店，他还会特地跑去买一袋南瓜酥给我带回家吃。</p>\n<p>现在想来，应该不会再有一个人像西风那样爱我吧，只是这个道理我明白得有点晚。</p>\n<h2 style=\"text-align: center;\"><strong>05.</strong></h2>\n<p>原本我以为我和西风会这样顺其自然地结婚生子，然后白头偕老。但一年半后，我们的感情发生了裂缝。</p>\n<p>我常常会因为一些小事跟他吵架，而他是个不善言辞的人，那段时间又天天加班，忙得不可开交，这使得我每次找他，他都不怎么理我，我当然就更不开心。</p>\n<p>心生不满的我开始故意跟西风唱反调。可西风在这一方面却后知后觉，他没有觉察到我的不开心，反而一本正经地跟我讨论结婚的事。这正好给了我发泄的机会：“我爸妈不可能同意我们现在结婚的，我们还没房没车，怎么结婚？难道要在租来的房子里结婚吗？”</p>\n<p>西风被我的问话吓倒了：“难道不能先结婚后买房吗？”</p>\n<p>我坚定地摇了摇头，说不可能。那一刻，我有看到西风脸上露出的无奈和巨大的压力感。</p>\n<p>那次谈话后，西风换了一家公司，与之不同的是除了工资涨了些外，还要天天加班、去外地出差也变得频繁。我和西风再也不能像之前一样吃饭约会了，到了周末，我要么宅在家，要么就是加班跑场子拍东西。我们似乎再也不能像之前那样悠闲了。</p>\n<p>印象中，大概有两个月，我们几乎没有说一句话。我想，我们的感情应该是在慢慢的不理睬间出现裂缝的吧。</p>\n<h2 style=\"text-align: center;\"><strong>06.</strong></h2>\n<p>没有等到我们在一起两年纪念日，我就跟西风提出了分手。和两年前一样，西风说了一个“好”字就消失了这让我有些出乎我意料——曾经那么爱我的西风却没有开口挽留我，甚至都没有问一句为什么，就毅然决然地答应了。</p>\n<p>碍于分手是我提出的，即使分手后，我曾无数次想要去找西风，但都没有迈出那一步。太过骄傲的我怎么会允许自己主动去找他呢，也就是这样，我和西风最终才会散落天涯。</p>\n<p>和西风分手后，我以为我会很快投入到一段新的恋情，却发现西风给过的温柔无人能及，是不是挂念着，他是不是也像我想念他一样在想念我，我们是不是有复合的可能。可惜时过境迁，西风有了美娇娘陪伴在侧，而我依旧一个人在心里流浪。</p>\n<h2 style=\"text-align: center;\"><strong>07.</strong></h2>\n<p>分开得越久，我越发觉得西风在我心中无可替代，他才是那个我最想留住的幸运，什么房子车子都不重要，只怪我当初太任性，又太骄傲，才会与他失之交臂，相忘于江湖。</p>\n<p>其实，两个人在一起，多一点耐心，多一点包容，多一点理解，就不会有那么多的“曲终人散”了，只可惜我明白得太晚。</p>\n<p>释迦牟尼说：“无论你遇见谁，他都是你生命中该出现的人，绝非偶然，他一定会教给你一些什么。”我想，这便是西风教会我的。</p>\n<p>文/流沙宗主</p>\n",
    "lyric": "让我爱你 然后把我抛弃\r\n我只要出发 不要目的\r\n我会一直想你 忘记了呼吸\r\n孤独到底 让我昏迷\r\n\r\n如果恨你 就能不忘记你\r\n所有的面目 我都不抗拒\r\n如果不够悲伤 就无法飞翔\r\n可没有梦想 何必远方\r\n\r\n我一直都在流浪\r\n可我不曾见过海洋\r\n我以为的遗忘\r\n原来躺在你手上\r\n\r\n我努力微笑坚强\r\n寂寞筑成一道围墙\r\n也敌不过夜里\r\n最温柔的月光",
    "info": "所属专辑：神秘嘉宾\r\n演唱者：林宥嘉\r\n作词：向月娥\r\n作曲：陈小霞\r\n编曲：陈辉阳@好好笑\r\n唱片公司：华研国际\r\n发行时间：2008年06月03日\r\n专辑类别：录音室专辑",
    "platform": "1",
    "music_id": "2088669",
    "charge_edt": "（责任编辑：十三妹 shisanmei@wufazhuce.com）",
    "related_to": "0",
    "web_url": "http://h.xiami.com/one-share.html?id=2088669",
    "praisenum": 1319,
    "hide_flag": "0",
    "sort": "0",
    "maketime": "2017-07-20 06:00:00",
    "last_update_date": "2017-07-19 20:26:09",
    "read_num": "43100",
    "story_summary": "人啊，总是在失去后才追悔莫及，而我也没能例外。",
    "audio": "",
    "anchor": "",
    "editor_email": "shisanmei@wufazhuce.com",
    "related_musics": "",
    "album": "神秘嘉宾",
    "start_video": "",
    "media_type": "1",
    "copyright": "",
    "audio_duration": "0",
    "author": {
      "user_id": "6144260",
      "user_name": "林宥嘉",
      "desc": "台湾歌手",
      "wb_name": "@林宥嘉YogaLin",
      "is_settled": "0",
      "settled_type": "0",
      "summary": "台湾歌手",
      "fans_total": "277",
      "web_url": "http://image.wufazhuce.com/FlQyxQX7RdnZRsqVAhH5qgV6vXo6"
    },
    "story_author": {
      "user_id": "8173858",
      "user_name": "流沙宗主",
      "desc": "流沙宗主，独闯江湖的流浪女，想用文字记录下每个相遇之人的故事。",
      "wb_name": "@流沙宗主",
      "is_settled": "0",
      "settled_type": "0",
      "summary": "流沙宗主，野生作者。",
      "fans_total": "103",
      "web_url": "http://image.wufazhuce.com/FrpHlA9yuHToUXlnQd2CGsrDKBef"
    },
    "author_list": [
      {
        "user_id": "8173858",
        "user_name": "流沙宗主",
        "desc": "流沙宗主，独闯江湖的流浪女，想用文字记录下每个相遇之人的故事。",
        "wb_name": "@流沙宗主",
        "is_settled": "0",
        "settled_type": "0",
        "summary": "流沙宗主，野生作者。",
        "fans_total": "103",
        "web_url": "http://image.wufazhuce.com/FrpHlA9yuHToUXlnQd2CGsrDKBef"
      }
    ],
    "feeds_cover": "http://image.wufazhuce.com/FsCQIPB9DfBOSoa4zl9lZzYyawO5?imageMogr2/auto-orient/blur/50x50/quality/75|imageslim",
    "next_id": "2271",
    "previous_id": "2260",
    "tag_list": [],
    "share_list": {
      "wx": {
        "title": "音乐 | 愿我们雨过天晴，晨曦依旧",
        "desc": "文/流沙宗主 人啊，总是在失去后才追悔莫及，而我也没能例外。",
        "link": "http://h.xiami.com/one-share.html?id=2088669&channel=singlemessage",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      },
      "wx_timeline": {
        "title": "音乐 | 愿我们雨过天晴，晨曦依旧",
        "desc": "文/流沙宗主 人啊，总是在失去后才追悔莫及，而我也没能例外。",
        "link": "http://h.xiami.com/one-share.html?id=2088669&channel=timeline",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      },
      "weibo": {
        "title": "ONE一个《音乐 | 愿我们雨过天晴，晨曦依旧》 文/流沙宗主： 人啊，总是在失去后才追悔莫及，而我也没能例外。 阅读全文：http://h.xiami.com/one-share.html?id=2088669&channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
        "desc": "",
        "link": "http://h.xiami.com/one-share.html?id=2088669&channel=weibo",
        "imgUrl": "",
        "audio": ""
      },
      "qq": {
        "title": "愿我们雨过天晴，晨曦依旧",
        "desc": "人啊，总是在失去后才追悔莫及，而我也没能例外。",
        "link": "http://h.xiami.com/one-share.html?id=2088669&channel=qq",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      }
    },
    "sharenum": 830,
    "commentnum": 180
  },{
    "id": "2271",
    "title": "I Love You",
    "cover": "http://image.wufazhuce.com/FuAScczq7u6psy1J9GTe4Cgqzp7o",
    "isfirst": "0",
    "story_title": "夜天花板有这段戏，总关不上心里的放映机",
    "story": "\n<p>前些日子我们在微博和音乐作者群里做了一次征集：有没有哪句歌词深深戳到你，它是在描述爱情中的某种状态，由于和你的经历有强烈共鸣，从而对你产生了暴击？</p>\n<p>收到的反馈，令人感慨：人和人之间的痛点果然大不一样……我们精选出了一些“花式暴击”，也希望在评论区看到你的身影。</p>\n<p>@RunningRunning_Yy: “想得却不可得，你奈人生何。”–——李宗盛《给自己的歌》</p>\n<p>@阿欣CXin：“别回头看我，亲爱的。”——五月天《后来的我们》</p>\n<p>@Singularityo：“你终于做了别人的小三。”——李宁《你终于做了别人的小三》</p>\n<p>@j06112016：“祈求天地放过一双恋人，怕发生的永远别发生。”——杨千嬅《少女的祈祷》</p>\n<p>@未择心：“祝你做个幸福的新娘，我的心事请你就遗忘。”——林宥嘉《说谎》</p>\n<p>@没头脑也很高兴啊：“拥有的都是侥幸，失去的才是人生。”——张悬《关于我爱你》</p>\n<p>@Derek_MSY：\"We don't talk anymore.\"——Charlie Puth,Selena Gomez《We Don’t Talk Anymore》</p>\n<p>@金叔叔：“你都如何回忆我，带着笑或是很沉默。”——刘若英《后来》</p>\n<p>@TheCorrine：“情人节的花你送给了别人，到隔天清晨留言你爱我。”——梁静茹《比较爱》</p>\n<p>@iai丸子：“维持着熟悉表情陌生关系不要变，只等到红白仪式一场偶遇才会面，现实前被逼安分才戒掉了闪缩挂念。”——张敬轩《尘埃落地》</p>\n<p>@何瘦污：“我没有办法清醒应付新的对决，你却轻易让我的心委屈到极限。”——陈奕迅《心的距离》</p>\n<p>@张郗愚：“转眼如隔世，已是很多年，前路遥不可及，后路渐远。”——丢火车乐队《如斯》</p>\n<p>@隔壁的丸子：“我们没有在一起至少还和家人一样，总是远远关心远远分享。”——刘若英《我们没有在一起》</p>\n<p>@热河路发型师胡彦祖：“我为你翻山越岭，却无心看风景。”——张信哲《爱就一个字》</p>\n<p>@ x小姐爱奋斗：“夜天花板有这段戏，总关不上心里的放映机。”——张国荣《你在何地》</p>\n<p>@杜凱璿de璇：“而事到如今，终于明白我命里没你。”——花粥《遥不可及的你》</p>\n<p>@念旧的人活得总像个流浪者：“喋喋不休，再也换不回温柔。”——李宗盛《山丘》</p>\n<p>@ Mr-银古：“曾让你心疼的姑娘，如今已悄然无踪影。”——许巍《曾经的你》</p>\n<p>@ Eric_Dht：“或许命运的签，只让我们遇见。” ——周杰伦《不能说的秘密》</p>\n<p>@慕澜si蘑菇：“我没有温柔，唯独有这点英勇。”—— 周笔畅《广东歌medley》</p>\n<p>@kum：“在所有人事已非的景色里，我最喜欢你。”——张悬《喜欢》</p>\n<p>@adore：“我痛恨成熟到不要你望着我流泪，但漂亮笑下去，仿佛冬天饮雪水。”——谢安琪《钟无艳》</p>\n<p>@第三十八吕布：“我的背脊如荒丘，而你却微笑摆首，把它当成整个宇宙。”——周深《化身孤岛的鲸》</p>\n<p>@不二 zZZ：“我想留下来陪你生活，一起吃点苦再享享福。” —— 张悬《留下来陪你生活》</p>\n<p>@餅怡咯：“在有生的瞬间能遇到你，竟花光所有运气，到这日才发现，曾呼吸过空气。”——陈奕迅《明年今日》</p>\n<p>@穆炎：“除你之外我对眼前的整座城市一无所知。”——小安《给郁结的诗》</p>\n<p>@一颗丸子：“最怕此生已经决心自己过，没有你，却又突然听到你的消息。”——五月天《忽然好想你》</p>\n<p>@岳岚：“大概当初我未懂得顾及，年少率性害惨你。”——陈奕迅《于心有愧》</p>\n<p>@kongmolan:“I knew I love you before I met you.”——Savage Gardon《I Knew I Loved You》</p>\n<p>@不雅雯：“但愿我可以没成长，完全凭直觉觅对象，模糊地迷恋你一场，就当风雨下涨潮。”——张国荣《有心人》</p>\n<p>@独喁：“你有你的人生，我有我的旅程，在前方还有等着你的人。”——叶倩文《爱的可能》</p>\n<p>@方橘子：“原本，能笑看对方超越自己底线，渐渐，却像是睫毛掉进眼睛里面。”——蛋堡,N.Chen《我们都有问题》</p>\n<p>@晓婷：“我对你仍有爱意，我对自己无能为力。”——张国荣《当爱已成往事》</p>\n<p>@十三妹丁无畏：“用我不悠扬的歌声，温暖你整个旅程。”——木玛《FeifeiRun》</p>\n<p>@秦何人：“我忘了摇滚，却忘不了你眨拉拉的眼睛。那是充满责备的眼睛，仿佛能把人的心儿看穿。”——腰乐队《世界呢分钟》</p>\n",
    "lyric": "I love you\r\nSay we're together baby\r\nYou and me\r\nI can only give my life\r\nAnd show you all I am\r\nIn the breath I breathe\r\nI will promise you my heart\r\nAnd give you all you need\r\nIf it takes some time\r\nIf you tell me you don't need me anymore\r\nThat our love won't last forever\r\nI will ask you for a chance to try again\r\nTo make our love a little better\r\nWooah\r\nI love you\r\nSay we're together baby\r\nSay we're together woh\r\nI need you\r\nI need you forever baby\r\nYou and me\r\nYou say you hardly know\r\nExactly who I am\r\nSo hard to understand\r\nI knew right from the start\r\nThe way I felt inside\r\nIf you read my mind\r\nIf you tell me you don't need me anymore\r\nThat our love won't last forever\r\nI will ask you for a chance to try again\r\nTo make our love a little better\r\nWooah\r\nI love you\r\nSay we're together baby\r\nSay we're together woh\r\nI need you\r\nI need you forever baby\r\nYou and me\r\nRemember when you used to hold me\r\nRemember when you made me cry\r\nYou said you loved me\r\nOh you did\r\nYes you do\r\nI love you\r\nSay we're together baby\r\nSay we're together woh\r\nI need you\r\nI need you forever baby\r\nYou and me",
    "info": "所属专辑：Audiophile Compilations\r\n演唱者：王若琳\r\n作词：娃娃\r\n作曲：陶喆\r\n唱片公司：Sony Music\r\n发行时间：2010年03月22日\r\n专辑类别：合集、杂锦",
    "platform": "1",
    "music_id": "1793341234",
    "charge_edt": "（责任编辑：秦何人 qhr@wufazhuce.com）",
    "related_to": "0",
    "web_url": "http://h.xiami.com/one-share.html?id=1793341234",
    "praisenum": 1735,
    "hide_flag": "0",
    "sort": "0",
    "maketime": "2017-07-21 06:00:00",
    "last_update_date": "2017-07-20 21:37:32",
    "read_num": "47501",
    "story_summary": "歌里对你产生暴击的情话。",
    "audio": "",
    "anchor": "",
    "editor_email": "qhr@wufazhuce.com",
    "related_musics": "",
    "album": "Audiophile Compilations",
    "start_video": "",
    "media_type": "1",
    "copyright": "",
    "audio_duration": "0",
    "author": {
      "user_id": "7810866",
      "user_name": "王若琳",
      "desc": "王若琳（Joanna Wang），1988年8月1日出生于中国台湾，创作型歌手。父亲为音乐制作人王治平。2008年1月，发行首张唱片《Start From Here》，由Sony BMG 发行。",
      "wb_name": "",
      "is_settled": "0",
      "settled_type": "0",
      "summary": "华语唱作人",
      "fans_total": "17",
      "web_url": "http://image.wufazhuce.com/FuCgxMPfdQgGKLNbFKjy8JwF54gp"
    },
    "story_author": {
      "user_id": "7570665",
      "user_name": "ONE APP",
      "desc": "ONE官方账号",
      "wb_name": "",
      "is_settled": "0",
      "settled_type": "0",
      "summary": "ONE官方账号",
      "fans_total": "17624",
      "web_url": "http://image.wufazhuce.com/Fj5-t3NM5FkTWzN5FZZUyqXctBrY"
    },
    "author_list": [
      {
        "user_id": "7570665",
        "user_name": "ONE APP",
        "desc": "ONE官方账号",
        "wb_name": "",
        "is_settled": "0",
        "settled_type": "0",
        "summary": "ONE官方账号",
        "fans_total": "17624",
        "web_url": "http://image.wufazhuce.com/Fj5-t3NM5FkTWzN5FZZUyqXctBrY"
      }
    ],
    "feeds_cover": "http://image.wufazhuce.com/FniBWkVh49hkNENf7PqrpHwYmS0H?imageMogr2/auto-orient/blur/50x50/quality/75|imageslim",
    "next_id": "2273",
    "previous_id": "2270",
    "tag_list": [],
    "share_list": {
      "wx": {
        "title": "音乐 | 夜天花板有这段戏，总关不上心里的放映机",
        "desc": "文/ONE APP 歌里对你产生暴击的情话。",
        "link": "http://h.xiami.com/one-share.html?id=1793341234&channel=singlemessage",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      },
      "wx_timeline": {
        "title": "音乐 | 夜天花板有这段戏，总关不上心里的放映机",
        "desc": "文/ONE APP 歌里对你产生暴击的情话。",
        "link": "http://h.xiami.com/one-share.html?id=1793341234&channel=timeline",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      },
      "weibo": {
        "title": "ONE一个《音乐 | 夜天花板有这段戏，总关不上心里的放映机》 文/ONE APP： 歌里对你产生暴击的情话。 阅读全文：http://h.xiami.com/one-share.html?id=1793341234&channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
        "desc": "",
        "link": "http://h.xiami.com/one-share.html?id=1793341234&channel=weibo",
        "imgUrl": "",
        "audio": ""
      },
      "qq": {
        "title": "夜天花板有这段戏，总关不上心里的放映机",
        "desc": "歌里对你产生暴击的情话。",
        "link": "http://h.xiami.com/one-share.html?id=1793341234&channel=qq",
        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
        "audio": ""
      }
    },
    "sharenum": 701,
    "commentnum": 320
  }
]
module.exports = {
  getVolById,
  getVolIdList,
  getVolsByMonth,
  getVolDetailById,
  getCarousel,
  getLastArticles,
  getEssayById,
  getSerialById,
  getQuestionById,
  getArticlesByMonth,
  getMusicIdList,
  getMusicsByMonth,
  getMusicDetailById,
  getMovieListById,
  getMovieDetailById,
  getMovieStoryById,
  carousel,
  articles,
  musics
}
