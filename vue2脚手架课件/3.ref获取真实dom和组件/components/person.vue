<template>
    <div class='person'>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'刘备',
            age:45
        }
    }
}
</script>