<template>
    <div class="shadow rounded mb-5">
        <b-row class="px-3 pt-3">
            <b-col cols="12" md="8" class="test mb-3">
                <h2 v-if="!advertisement_data.editing">{{advertisement_data.title}}</h2>
                <input v-else class="item-edit px-3 py-2" type="text" 
                   v-model="advertisement_data.title"
                   @keyup.enter="doneEdit(advertisement_data)"
                >
                <b-icon icon="pen" font-scale="2" @click="itemEdit(advertisement_data)"></b-icon>
                <btn v-if="advertisement_data.status == 'Активное'" class="mx-3"
                    size="md"
                    btnValue="Закрыть"
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
        <!-- <b-row class="px-3">
            <b-col cols="12" md="3">
                <p class="font-weight-bold">{{advertisement_data.date}}</p>
            </b-col>
            <b-col cols="12" md="3">
                <p class=""><span class="font-weight-bold">Категория:</span> {{advertisement_data.category}}</p>
            </b-col>
            <b-col cols="12" md="3">    
                <p class=""><span class="font-weight-bold">Город:</span> {{advertisement_data.city}}</p>
            </b-col>
        </b-row> -->
        <b-row>
            <b-col>               
                <p class="px-3">{{advertisement_data.description}}</p>
            </b-col>
            <b-col cols="12" md="4">
                <p class="px-3 pl-md-0"><span class="font-weight-bold">Цена:</span> {{advertisement_data.price}}</p>
                <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import btn from '../button/button-main'

export default {
    name: 'card-advertisement',
    components:{
        btn
    },
    data(){
        return{
            beforeEditName: null
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
        itemEdit(item){
            this.beforeEditName = item.title
            //this.beforeEditDes = item.description
            item.editing = true
        },
        doneEdit(item){
            item.editing = false
        }
    }
}
</script>

<style lang="sass" scoped>
.test
    display: flex
    align-items: center

.item-edit
    width: 100%
    border: none
    border-bottom: 1px solid #c4c4c4
    &:focus
        outline: none
</style>