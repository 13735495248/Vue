<template>
    <div id="app">
        <person></person>
        <hr/>
        <student />
    </div>
</template>

<script>

import person from './components/person.vue'
import student from './components/student.vue'
export default {
    components:{
        person,
        student
    },
    methods:{
        
    },

    mounted(){
       
    }
}
</script>