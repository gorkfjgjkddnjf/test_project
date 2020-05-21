<template>
    <b-container>
        <b-form-row>
            <b-col cols="4">
                <tselect
                    :options="category"
                />
            </b-col>
            <b-col cols="4">
                <tselect

                />
            </b-col>
            <b-col>
                <inputSearch
                    
                />
            </b-col>
        </b-form-row>
        <b-row class="justify-content-center">
            <h2>Актуальные объявления</h2>
        </b-row>
        <b-row>
            <tcard
                v-for="item in activeAdvertisement" :key="item.id"
                :advertisement_data="item"
            />
        </b-row>
        <b-row> 
            <b-col cols="12">
                <b-pagination-nav v-model="pageNum" :number-of-pages="9" use-router limit="10" align="right"></b-pagination-nav>
            </b-col>
        </b-row> 
    </b-container>
</template>

<script>

import inputSearch from '../widgets/input/input-search'
import tselect from '../widgets/input/select'
import tcard from '../widgets/card/card-advertisement'
import {mapActions, mapGetters} from 'vuex'
import forSelect from '../../mixins/for-select'

export default {
    name: 'advertisement',
    mixins:[
        forSelect
    ],
    components:{
        tselect,
        inputSearch,
        tcard,
    },
    computed:{
        ...mapGetters([
            'ADVERTISEMENT',
        ]),
        activeAdvertisement(){
            return this.activeAdvert
        }
    },
    data(){
        return {
            activeAdvert: [],
            pageNum: 1,
            //flag:true,
        }
    },
    methods:{
        ...mapActions([
            'GET_ADVERTISEMENT',
        ]),
        sortByStatus() {
            let vm = this
            this.ADVERTISEMENT.map(function (item) {
                if(item.status == 'Активное') {
                    vm.activeAdvert.push(item)
                }
            })
        },
        // linkGen() {
        //     if(this.flag){
        //         this.flag = false
        //                     console.log(this.pageNum)
        //         this.GET_ADVERTISEMENT(this.pageNum)
        //             .then(() =>{
        //         this.sortByStatus()
        //         })
        //     }
        // }
    },
    mounted(){
        this.GET_ADVERTISEMENT(this.pageNum)
        .then(() =>{
            this.sortByStatus()
        })
    }
}
</script>

<style lang="sass" scoped>

</style>