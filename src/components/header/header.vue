<template>  
    <b-container>
        <b-navbar toggleable="md" class="header px-0">
        <b-navbar-brand :to="{name: 'advertisement'}">
            <img src="https://placekitten.com/g/100/70" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-row v-if="isLogged" class="justify-content-md-end">
                    <b-col cols="12" md="3" class="mb-3 mb-md-0 mr-3">
                    <btn
                        style="width: 8em; white-space: pre-line;"
                        class="py-0"
                        btnValue="Добавить объявление"
                        @action="addAdvertisement"
                    />
                    </b-col>
                    <b-col cols="12" md="3" class="mb-3 mb-md-0 text-md-center test">
                    <b-link :to="{name: 'my-advertisement'}">Мои объявления</b-link>
                    </b-col>
                    <b-col cols="12" md="3" class="mb-3 mb-md-0 text-md-center test">
                    <b-link :to="{name: 'user-profile'}" class="">Личный кабинет</b-link>
                    </b-col>
                    <b-col cols="12" md="2" class="mb-3 mb-md-0">
                    <btn
                        class="h-100"
                        btnValue="Выйти"
                    />
                    </b-col>
                </b-row>
                <b-row v-else>
                    <b-col cols="12" md="4" class="mb-3 mb-md-0">
                    <btn
                        @action="logIn"
                        btnValue="Войти"
                    />
                    </b-col>
                    <b-col cols="12" md="8" class="mb-3 mb-md-0">
                    <btn
                        @action="logUp"
                        btnValue="Зарегистрироваться"
                    />
                    </b-col>
                </b-row>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <popups
        :isVisibleAdd="isVisibleAdd"
        :isVisibleLogIn="isVisibleLogIn"
        :isVisibleLogUp="isVisibleLogUp"
        @close="close"
    />

    </b-container>
</template>

<script>

import btn from '../widgets/button/button-main'
import popups from '../popup/popup-wrapper'

export default {
    name: 'nav-bar',
    components:{
        btn,
        popups
    },
    data() {
        return {
            isLogged: true,
            isVisibleAdd: null,
            isVisibleLogIn: null,
            isVisibleLogUp: null
        }
    },
    props:{
        
    },
    computed:{
        // isLogged(){
        //     return this.IS_LOGGED
        // }
    },
    methods:{
        addAdvertisement(){
            this.isVisibleAdd = true
        },
        logIn(){
            this.isVisibleLogIn = true
        },
        logUp(){
            this.isVisibleLogUp = true
        },
        close(){
            this.isVisibleAdd = false
            this.isVisibleLogIn = false
            this.isVisibleLogUp = false
        },
    }
}
</script>

<style lang="sass">

</style>