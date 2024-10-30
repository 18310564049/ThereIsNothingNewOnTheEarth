import {
  MUSIC_PALY_IMG,
  MUSIC_PAUSE_IMG
} from '../../utils/constants.js'
import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    musics: [],
    current: 0,
    playId: -1
  },
  onLoad: function () {
    let musics = api.musics
    musics[0].playImg = MUSIC_PALY_IMG
    this.setData({ musics })
    // api.getMusicIdList({
    //   success: (res) => {

    //     if (res.data.res === 0) {
    //       let idList = res.data.data
    //       this.getMusics(idList)
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function () {
    const PAGE_TITLE = '音乐';
    // 检查当前页面标题是否已经是目标标题
    const currentTitle = this.data.navigationBarTitle || ''; // 假设页面数据中有 navigationBarTitle 字段
    if (currentTitle !== PAGE_TITLE) {
      // 设置页面标题为音乐
      wx.setNavigationBarTitle({
        title: PAGE_TITLE,
        success: function () {
          console.log('页面标题设置成功');
        },
        fail: function (err) {
          console.error('页面标题设置失败2:', err);
        }
      });
    }
  },

  getMusics: function (idList) {
    let musics = this.data.musics

    if (idList.length > 0) {
      api.getMusicDetailById({
        query: {
          id: idList.shift()
        },
        success: (res) => {
          if (res.data.res === 0) {
            let music = res.data.data

            music.playImg = MUSIC_PALY_IMG
            music.contentType = 'story'
            music.story = util.filterContent(music.story)
            music.maketime = util.formatMakettime(music.maketime)
            musics.push(music)
          }
          this.getMusics(idList)
        }
      })
    } else {
      this.setData({ musics })
    }
  },
  handleChange: function (e) {
    let current = e.detail.current
    let length = this.data.musics.length

    if (current === length) {
      this.setData({
        current: length
      })
      wx.navigateTo({
        url: '../history/history?page=music',
        success: () => {
          this.setData({
            current: length - 1
          })
        }
      })
    }
  },
  togglePlay: function (e) {
    let musics = this.data.musics
    let playId = this.data.playId
    let musicId = e.target.dataset.id
    let music = musics.find((music) => music.id === musicId)

    musics = musics.map((music) => {
      music.playImg = MUSIC_PALY_IMG
      return music
    })

    if (playId !== musicId) {
      playId = musicId
      music.playImg = MUSIC_PAUSE_IMG
      this.playMusic(music)
    } else {
      playId = -1
      music.playImg = MUSIC_PALY_IMG
      this.pauseMusic()
    }

    this.setData({ musics, playId })
  },
  playMusic: function (music) {
    wx.playBackgroundAudio({
      // dataUrl: music.music_id,
      dataUrl: "http://mvoice.spriteapp.cn/voice/2017/0725/5976bb11cb0db.mp3",
      title: music.title
    })
  },
  pauseMusic: function () {
    wx.pauseBackgroundAudio()
  },
  switchContent: function (e) {
    let id = e.currentTarget.dataset.id
    let type = e.target.dataset.type

    let musics = this.data.musics
    let music = musics.find((music) => music.id === id)
    music.contentType = type

    this.setData({ musics })
  }
})