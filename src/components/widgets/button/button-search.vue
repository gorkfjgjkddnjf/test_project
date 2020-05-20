<template>
    <b-button type="search" :id="id" class="btn-search px-3" variant="primary"><b-icon icon="search"></b-icon></b-button>
</template>

<script>

export default {
    name: 'login',
    props:{
        id:{
            type: String,
            default(){
                return null
            }
        },
    }
}
</script>

<style lang="sass" scoped>
.btn-search
    border-radius: 0rem 2rem 2rem 0rem
</style>