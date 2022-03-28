// index.js
Page({
  data: {

  },
  /* 
  currentTarget和target的区别:
    当bindtap绑定在button的父元素上时,currentTarget会指向绑定的父元素，
    而target依旧指向button;
    当bindtap绑定在button上时,currentTarget和target相等,都指向button

    注意:
      一般我们使用currentTarget结合data-自定义属性获取点击事件的参数
   */

  /* bindtap绑定在button的父view上 */
  foo1(e) {
    /* 
    e.currentTarget是父元素view,view上没有自定义属性data-id
    */
    console.log('foo1:',e.currentTarget.dataset.id);
  },
  /* bindtap绑定在button上 */
  foo2(e) {
     /* 
    e.currentTarget是button,button上有自定义属性data-id
    */
    console.log('foo2:',e.currentTarget.dataset.id);
  },
  onLoad() {

  },

})
