<template>

<div class="popup-wrapper">
    <b-col cols="11" md="8" lg="6" xl="4" class="t-popup shadow">
        <div class="popup-head mb-4 pt-3">
            <slot name="head"></slot>
            <hr>
        </div>
        <div class="content mb-4">
            <slot></slot>
        </div>
        <b-row class="justify-content-center pb-4">
            <btn
                :btnValue="btnOk"
            />
        </b-row>

    </b-col>
</div>

</template>

<script>

import btn from '../widgets/button/button-main'

export default {
    name: 'popup',
    props:{
        btnOk:{
            type: String,
            default: 'popupname'
        },
    },
    components:{
        btn
    },
    data(){
        return{

        }
    },
    computed:{ 

    },
    methods:{
        confirm(){
            this.$emit('confirm')
        }
    }
}

</script>


<style lang="sass" scoped>
#Yes
    background: #6FA0D9
    border-radius: 20px
    color: #ffffff
#No
    background: #C74B4B
    border-radius: 20px
    color: #ffffff

.t-popup
    background: #ffffff
    border-radius: 15px


.popup-wrapper
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    right: 0
    left: 0
    top: 0
    bottom: 0
    background: rgba(0, 0, 0, .25)
    z-index: 1000

</style>