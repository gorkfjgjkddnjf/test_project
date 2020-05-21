<template>
    <b-button :block="block" :id="id" :variant="variant" :size="size" @click="action">{{btnValue}}</b-button>
</template>

<script>

export default {
    name: 'button-main',
    props:{
        btnValue:{
            type: String,
            default(){
                return 'button'
            }
        },
        variant:{
            type: String,
            default(){
                return 'primary'
            }
        },
        id:{
            type: String,
            default(){
                return null
            }
        },
        block:{
            type: Boolean,
            default(){
                return false
            }
        },
        size:{
            type: String,
            default(){
                return 'lg'
            }
        },
    },
    methods:{
        action(){
           this.$emit('action') 
        }
    }
}
</script>

<style lang="sass">

</style>