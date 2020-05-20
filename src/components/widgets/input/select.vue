<template>
    <b-form-select v-model="selected" :options="options"></b-form-select>
</template>

<script>
export default {
    name: 'select',
    props:{
        options:{
            type: Array,
            default(){
                return []
            }
        },
    },
    data(){
        return{
            selected: null
        }
    },

}
</script>

<style>

</style>