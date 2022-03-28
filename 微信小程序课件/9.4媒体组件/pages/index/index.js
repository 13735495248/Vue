// index.js
Page({
  data: {
    
    
  },
  goimage(){
   wx.navigateTo({
     url: '/pages/myimage/myimage',
   })
  },
  goaudio(){
    wx.navigateTo({
      url: '/pages/myaudio/myaudio',
    })
   },
   gocamera(){
    wx.navigateTo({
      url: '/pages/mycamera/mycamera',
    })
   },
   govideo(){
    wx.navigateTo({
      url: '/pages/myvideo/myvideo',
    })
   },


  
  onLoad() {
   
  },
 
})
