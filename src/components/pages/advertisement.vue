<template>
    <b-container>
        <b-row>
            <b-col>
                <tselect
                    :options="category"
                />
            </b-col>
            <b-col>
                <tselect
                    :options="category"
                />
            </b-col>
            <b-col>
                <inputSearch
                    
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import inputSearch from '../widgets/input/input-search'
import tselect from '../widgets/input/select'

export default {
    name: 'advertisement',
    components:{
        tselect,
        inputSearch
    },
    data(){
        return {
            category:[
                {value: null, text: 'Категория'},
                {value: '1', text: 'Недвижимость'},
                {value: '2', text: 'Транспорт'},
                {value: '3', text: 'Личные вещи'},
                {value: '4', text: 'Хобби и отдых'},
                {value: '5', text: 'услуги'},
                {value: '6', text: 'Бытовая техника'}
            ]
        }
    }
}
</script>

<style lang="sass">

</style>