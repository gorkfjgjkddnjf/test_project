<template>
    <b-form-select v-model="selected" :options="options" ></b-form-select>
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
        value:{
            default(){
                return null
            }
        }
    },
    computed:{
        // test(){
        //     if(this.value != null){
        //         return this.value
        //     }
        //     else{
        //         return this.selected
        //     }
        // }
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