<template>
    <div id="app">
        <person></person>
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
    }
}
</script>