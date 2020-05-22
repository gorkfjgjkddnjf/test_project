<template>
  <b-container>
      <b-row class="mt-md-5 pt-md-5 justify-content-between">
            <b-col cols="12" md="8">
                <b-breadcrumb :items="items"></b-breadcrumb>
                <b-row class="mb-3">
                    <b-col cols="12" md="8">
                        <h2>{{item.title}}</h2>
                    </b-col>
                    <b-col class="test justify-content-md-end">
                        <p class="mb-0"><span class="font-weight-bold">Цена:</span> {{item.price}} руб</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="test">
                        <p class="font-weight-bold">{{item.date}}</p>
                        <p class="pl-3"><span class="font-weight-bold">Город:</span> {{item.city}}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <!-- <b-img :src="item.img[0].img" fluid></b-img> -->
                        <b-carousel
                            id="carousel-1"
                            controls
                            indicators
                        >
            
                        <b-carousel-slide v-for="img in item.img" :key="img.id" :img-src="img.img"></b-carousel-slide>

                        </b-carousel>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <p>{{item.description}}</p>
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="rounded shadow" cols="12" md="4">
                <b-row>
                    <b-col class="my-3" cols="12" sm="6">
                        <b-img :src="USER[0].img" fluid></b-img>
                    </b-col>
                </b-row>
                <p><span class="font-weight-bold">Имя: </span> {{USER[0].name}}</p>
                <p><span class="font-weight-bold">На сайте: </span>с {{USER[0].date}}</p>
                <p><span class="font-weight-bold">Объявлений: </span> {{USER[0].countAdvert}}</p>
                <p><span class="font-weight-bold">Телефон: </span> {{USER[0].phone}}</p>
                <p><span class="font-weight-bold">О себе: </span> {{USER[0].description}}</p>
            </b-col>
      </b-row>
  </b-container>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: 'this-advertisement',
    props:{
        item:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            items: [
                {
                    text: 'Объявления',
                    to: { name: 'advertisement' }
                },
                {
                    text: this.item.category,
                    to: { name: 'advertisement' }
                },
                {
                    text: this.item.title,
                    active: true
                }
            ]
        }
    },
    computed:{
        ...mapGetters([
            'USER'
        ]),
    },


}
</script>

<style>

</style>