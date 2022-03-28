/*
mapState源码实现
states:需要传入的配置对象({用户定义的变量名:state中变量名})
*/
mapState (states) {
  //定义空对象res
  const res = {}
  /* 
  对格式化后的对象进行for循环,取出key和val的值
  假定normalizeMap(states)结果是{key:'myscore',val:'score'} 
  */
  normalizeMap(states).forEach(({ key, val }) => {
	/* 
	给res添加属性,属性名是key即myscore,属性值是一个
	函数,函数的返回值是this.$store.state['score']
	*/
	
	res[key] = function mappedState () {
	  return this.$store.state[val]
	}
  })
  /* 
  mapState执行完返回值应该是:
   {myscore:score(){return this.$store.state['score']}}
  */
  return res
},

/* 
normalizeMap:返回格式化后的对象map
比如说map传的是{myscore:'score'},那么normalizeMap返回
的就是{key:'myscore',val:'score'}
*/
normalizeMap (map) {
  return Object.keys(map).map(key =>{
	  return { key:key, val: map[key] }
  })
}