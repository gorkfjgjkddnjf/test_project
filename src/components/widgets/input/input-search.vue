<template>
    <b-input-group class="search-wrapper">
        <b-form-input :id="id" type="search" :placeholder="placeholder"></b-form-input>
        <btnSearch/>
    </b-input-group>
</template>

<script>

import btnSearch from '../button/button-search'

export default {
    name: 'input-search',
    components:{
        btnSearch
    },
    props:{
        id:{
            type: String,
            default(){
                return 'input'
            }
        },
        placeholder:{
            type: String,
            default(){
                return ''
            }
        },

    }
}
</script>

<style lang="sass" scoped>
.search-wrapper
    display: flex
</style>