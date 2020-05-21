<template>
    <b-col cols="12" md="6" xl="4" >
        <router-link class="advertisement" :to="{name: 'this-advertisement', params:{item: advertisement_data}}">
            <b-card 
            @click="getUser"
            :title="advertisement_data.title"
            :img-src="advertisement_data.img[0].img"
            img-alt="Image"
            img-top
            class="mx-2 my-3"
        >
            <b-card-text>
                Цена: {{advertisement_data.price}} руб
            </b-card-text>
            <b-card-text>
                {{advertisement_data.date}}
            </b-card-text>
        </b-card>
        </router-link>
    </b-col>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'card-advertisement',
    components:{

    },
    props:{
        advertisement_data:{
            type: Object,
            default(){
                return{}
            }
        },
    },
    computed:{
        ...mapGetters([
            'USER'
        ]),
    },
    methods:{
        getUser(){
            this.GET_USER(this.advertisement_data.user_id)
        },
        ...mapActions([
            'GET_USER'
        ])
    }
}
</script>

<style lang="sass">

</style>