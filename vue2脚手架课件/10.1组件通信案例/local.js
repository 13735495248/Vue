const local = {
    setItem(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },

    getItem(key){
        let o = localStorage.getItem(key);
        return JSON.parse(o);
    }
}

export default local;