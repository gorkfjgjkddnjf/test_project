<template>
    <div class="shadow rounded mb-5">

        <popups
            :editing="editing"
            @close="close"
            :item="item"
            @test="test"
        />

        <carousel
            :image="advertisement_data.img"
            @closeCarousel="closeCarousel"
            v-if="isVisibleCarousel"
        />

        <b-row class="px-3 pt-3">
            <b-col cols="12" md="8" class="test mb-3">
                <h2>{{advertisement_data.title}}</h2>
                <b-icon v-if="advertisement_data.status == 'Активное'" icon="pen" font-scale="2" @click="itemEdit(advertisement_data)"></b-icon>
                <btn v-if="advertisement_data.status == 'Активное'" class="mx-3"
                    size="md"
                    btnValue="Закрыть"
                    @action="closeAddvertisement()"
                />
            </b-col>

            <b-col cols="12" md="3" class="test mb-3">
                <p class="mb-0"><span class="font-weight-bold">Статус:</span> {{advertisement_data.status}}</p>                
            </b-col>

            <b-col cols="12" md="3" lg="2">
                <p class="font-weight-bold">{{advertisement_data.date}}</p>
            </b-col>
            <b-col cols="12" md="9" class="test">
                <p class=""><span class="font-weight-bold">Категория:</span> {{advertisement_data.category}}</p>
                <p class="pl-3"><span class="font-weight-bold">Город:</span> {{advertisement_data.city}}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>               
                <p class="px-3">{{advertisement_data.description}}</p>
            </b-col>
            <b-col cols="12" md="4">
                <p class="px-3 pl-md-0"><span class="font-weight-bold">Цена:</span> {{advertisement_data.price}}</p>
                <b-img :src="advertisement_data.img[0].img" fluid alt="Responsive image"
                    @click="showCarousel"
                ></b-img>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import btn from '../button/button-main'
import popups from '../../popup/popup-wrapper'
import carousel from '../card/carousel'

export default {
    name: 'card-advertisement',
    components:{
        btn,
        popups,
        carousel
    },
    data(){
        return{
            beforeEditName: null,
            editing: false,
            item: null,
            isVisibleCarousel: false
        }
    },
    props:{
        advertisement_data:{
            type: Object,
            default(){
                return{}
            }
        },
    },
    methods:{
        close(){
            this.editing = false
        },
        itemEdit(item){
            this.item = item
            this.editing = true
        },
        doneEdit(item){
            item.editing = false
        },
        closeAddvertisement(){
            this.$emit('closeAddvertisement')
        },
        showCarousel(){
            this.isVisibleCarousel = true
        },
        closeCarousel(){
            this.isVisibleCarousel = false
        },
        test(){
            console.log(4)
            this.$emit('confirm')
        }
    }
}
</script>

<style lang="sass" scoped>

</style>