// component/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image_url: Array,
    content:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    click:function(){
      wx.navigateTo({
        url: '../../pages/index/index',
      })
    }
  }
})
