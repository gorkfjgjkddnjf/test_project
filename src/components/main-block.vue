<template>
    <div class="t-main-wrapper">
        <tHeader/>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>

</template>

<script>
import tHeader from './header/header';

export default {
    name: "main-block",
    components: {
        tHeader
    },
    data(){
        return {}
    },
    computed: {}
}
</script>


<style lang="sass">



</style>