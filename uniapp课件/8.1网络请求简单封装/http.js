function get(url,obj,callback){
	uni.request({
		url:url,
		data:(obj?obj:{}),
		method:'GET',
		success: (res)=>{
			callback(res.data);
		}
	})
}

function post(url,obj,callback){
	uni.request({
		url:url,
		data:(obj?obj:{}),
		method:'POST',
		success: (res)=>{
			callback(res.data);
		}
	})
}

export {get,post}