<template>
    <b-container>
        <head1></head1>

        <popup v-if="isVisibleAdd" btnOk="Добавить">
            <template v-slot:head>
                <h2 class="text-center">Добавить объявление</h2>
            </template>
            <b-form>
                <inputText
                    label="Заголовок"
                    labelFor="title"
                />
                <label for="category">Категория</label>
                <tselect id="category" 
                    :options="category"
                />
                <description
                    label="Описание"
                />
                <label for="city">Город</label>
                <tselect id="sity"
                    
                />
                <inputNumber
                    label="Цена"
                    labelFor="price"
                />

                <inputFile
                    label="Вы можете загрузить фотографию в формате jpeg, jpg, png, весом не более 10 Мб"
                />
            </b-form>
        </popup>

        <popup v-if="isVisibleLogIn" btnOk="Войти">
            <template v-slot:head>
                <h2>Авторизация</h2>
            </template>
            <b-form>
                <inputEmail
                    label="Email:"
                    labelFor="email"
                />
                <inputPass
                    label="Password:"
                    labelFor="pass"
                />
            </b-form>
        </popup>

        <popup v-if="isVisibleLogIn" btnOk="Зарегистрироваться">
            <template v-slot:head>
                <h2>Регистрация</h2>
            </template>
            <b-form>
                <inputEmail
                    label="Email:"
                    labelFor="email"
                />
                <inputPass
                    label="Password:"
                    labelFor="pass"
                />
            </b-form>
        </popup>

        <b-form-row>
            <b-col cols="4">
                <tselect
                    :options="category"

                />
            </b-col>
            <b-col cols="4">
                <tselect
                    :options="category"
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
                    v-for="item in ADVERTISEMENT" :key="item.id"
                    :advertisement_data="item"
                />
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-pagination-nav :number-of-pages="10" use-router></b-pagination-nav>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import inputSearch from '../widgets/input/input-search'
import tselect from '../widgets/input/select'
import tcard from '../widgets/card/card-my-advertisement'
import {mapActions, mapGetters} from 'vuex'

import popup from '../popup/popup'
import inputEmail from '../widgets/input/input-email'
import inputPass from '../widgets/input/input-pass'
import head1 from '../header/header'
import inputText from '../widgets/input/input-text'
import inputNumber from '../widgets/input/input-number'
import inputFile from '../widgets/input/input-file'
import description from '../widgets/textarea/description'

export default {
    name: 'advertisement',
    components:{
        tselect,
        inputSearch,
        tcard,
        popup,
        inputEmail,
        inputPass,
        head1,
        inputText,
        description,
        inputFile,
        inputNumber
    },
    computed:{
        ...mapGetters([
            'ADVERTISEMENT',
        ]),
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
            ],
            status:[
                {value: null, text: 'Статус'},
                {value: '1', text: 'Активное'},
                {value: '2', text: 'Закрытое'},
            ],
            isVisibleLogIn: false,
            isVisibleAdd: false
        }
    },
    methods:{
        ...mapActions([
            'GET_ADVERTISEMENT',
        ]),
    },
    mounted(){
        this.GET_ADVERTISEMENT()
    }
}
</script>

<style lang="sass" scoped>

</style>