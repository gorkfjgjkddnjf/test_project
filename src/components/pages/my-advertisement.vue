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
                    :options="status"
                />
            </b-col>
            <b-col>
                <inputSearch
                    
                />
            </b-col>
        </b-form-row>
        <b-row class="justify-content-center">
            <h2>Мои объявления</h2>
        </b-row>
        <b-row>
            <b-col cols="12">
                <tcard
                    v-for="(item,index) in USER_ADVERTISEMENT" :key="item.id"
                    :advertisement_data="item"
                    @closeAddvertisement="closeAddvertisement(index)"
                    @confirm="addItem"
                />
            </b-col>
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
import tcard from '../widgets/card/card-my-advertisement'
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
            'USER_ADVERTISEMENT',
        ]),
    },
    data(){
        return {
            pageNum: 1
        }
    },
    methods:{
        ...mapActions([
            'GET_USER_ADVERTISEMENT',
            'CLOSE_ADVERTISEMENT'
        ]),
        closeAddvertisement(index){
            this.CLOSE_ADVERTISEMENT(index)
        },
        addItem(){
            console.log(1)
        }
    },
    mounted(){
        this.GET_USER_ADVERTISEMENT(1)
    }
}
</script>

<style lang="sass" scoped>

</style>