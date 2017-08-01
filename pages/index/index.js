import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    vols: [],
    current: 0
  },
  onLoad: function () {
    let vols = [{
      "res": 0,
      "data": {
        "hpcontent_id": "1776",
        "hp_title": "VOL.1749",
        "author_id": "-1",
        "hp_img_url": "http://image.wufazhuce.com/Fv6E48iCgADRjuPJYPnA4A3rxLeG",
        "hp_img_original_url": "http://image.wufazhuce.com/Fv6E48iCgADRjuPJYPnA4A3rxLeG",
        "hp_author": "插画＆Moeder Lin 作品",
        "ipad_url": "http://image.wufazhuce.com/Fv6E48iCgADRjuPJYPnA4A3rxLeG",
        "hp_content": "日子，过起来当然就长，但是拖拖拉拉，日复一日，年复一年，最后就混淆成了一片。每个日子都丧失了自己的名字。对我来说，只有“昨天”与“明天”这样的字，才具有一定的意义。 by 加缪",
        "hp_makettime": "2017-07-21 06:00:00",
        "hide_flag": "0",
        "last_update_date": "2017-07-17 15:10:03",
        "web_url": "http://m.wufazhuce.com/one/1776",
        "wb_img_url": "",
        "image_authors": "Moeder Lin",
        "text_authors": "加缪",
        "image_from": "",
        "text_from": "",
        "content_bgcolor": "#FFFFFF",
        "template_category": "1",
        "maketime": "2017-07-21 06:00:00",
        "share_list": {
          "wx": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1776?channel=singlemessage",
            "imgUrl": "",
            "audio": ""
          },
          "wx_timeline": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1776?channel=timeline",
            "imgUrl": "",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个 日子，过起来当然就长，但是拖拖拉拉，日复一日，年复一年，最后就混淆成了一片。每个日子都丧失了自己的名字。对我来说，只有“昨天”与“明天”这样的字，才具有一定的意义。 by 加缪——加缪 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1776?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1776?channel=qq",
            "imgUrl": "",
            "audio": ""
          }
        },
        "praisenum": 10389,
        "sharenum": 2832,
        "commentnum": 0
      }
    }, {
      "res": 0,
      "data": {
        "hpcontent_id": "1785",
        "hp_title": "VOL.1758",
        "author_id": "-1",
        "hp_img_url": "http://image.wufazhuce.com/FlxgWZelnL0-P8hXTvnlwZZ9Ab7f",
        "hp_img_original_url": "http://image.wufazhuce.com/FlxgWZelnL0-P8hXTvnlwZZ9Ab7f",
        "hp_author": "绘画＆Diego Rivera 作品",
        "ipad_url": "http://image.wufazhuce.com/FlxgWZelnL0-P8hXTvnlwZZ9Ab7f",
        "hp_content": "我意识到自己所有的身心都沉浸在那阵风里，所有的生活都聚集在此处、此时。世上无一涣散的不安。过去许多年后我才明白，那并不是一个幸福的开始，那就是幸福本身。后来，我就对幸福有了经验：它灿烂，宁静，出其不意，无法复制并且转瞬即逝。 from 张春《一生里的某一刻》",
        "hp_makettime": "2017-07-30 06:00:00",
        "last_update_date": "2017-07-24 10:27:46",
        "web_url": "http://m.wufazhuce.com/one/1785",
        "wb_img_url": "",
        "image_authors": "Diego Rivera",
        "text_authors": "张春《一生里的某一刻》",
        "image_from": "",
        "text_from": "",
        "content_bgcolor": "#FFFFFF",
        "template_category": "0",
        "maketime": "2017-07-30 06:00:00",
        "share_list": {
          "wx": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1785?channel=singlemessage",
            "imgUrl": "",
            "audio": ""
          },
          "wx_timeline": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1785?channel=timeline",
            "imgUrl": "",
            "audio": ""
          },
          "weibo": {
            "title": "ONE一个 我意识到自己所有的身心都沉浸在那阵风里，所有的生活都聚集在此处、此时。世上无一涣散的不安。过去许多年后我才明白，那并不是一个幸福的开始，那就是幸福本身。后来，我就对幸福有了经验…——张春《一生里的某一刻》 下载ONE一个APP:http://weibo.com/p/100404157874",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1785?channel=weibo",
            "imgUrl": "",
            "audio": ""
          },
          "qq": {
            "title": "",
            "desc": "",
            "link": "http://m.wufazhuce.com/one/1785?channel=qq",
            "imgUrl": "",
            "audio": ""
          }
        },
        "praisenum": 4356,
        "sharenum": 1379,
        "commentnum": 0
      }
    }]
    this.setData({ vols })
    // api.getVolIdList({
    //   success: (res) => {
    //     if (res.data.res === 0) {
    //       let idList = res.data.data
    //       this.getVols(idList)
    //     }
    //   }
    // })
  },
  getVols: function (idList) {
    let vols = this.data.vols

    if (idList.length > 0) {
      api.getVolById({
        query: {
          id: idList.shift()
        },
        success: (res) => {
          if (res.data.res === 0) {
            let vol = res.data.data
            
            vol.hp_makettime = util.formatMakettime(vol.hp_makettime)
            vols.push(vol)
          }
          this.getVols(idList)
        }
      })
    } else {
      this.setData({ vols })
    }
  },
  handleChange: function (e) {
    let current = e.detail.current
    let volsLength = this.data.vols.length

    if (current === volsLength) {
      this.setData({
        current: volsLength
      })
      wx.navigateTo({
        url: '../history/history?page=index',
        success: () => {
          this.setData({
            current: volsLength - 1
          })
        }
      })
    }
  }
})
