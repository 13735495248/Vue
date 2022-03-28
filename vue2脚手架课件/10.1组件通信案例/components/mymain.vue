<template>
    <div>
        <list></list>
        <search></search>
    </div>
</template>

<script>
import search from './search.vue'
import list from './list.vue'
export default {
    components:{
        search,
        list,
    }
}
</script>