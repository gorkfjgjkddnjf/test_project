<template>  
    <b-navbar toggleable="md" class="header px-0">
        <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/100/70" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <div v-if="isLogged">
                    <btn
                        style="width: 8em; white-space: pre-line;"
                        class="py-0 mr-3"
                        btnValue="Добавить объявление"
                    />
                    <b-link :to="{name: 'my-advertisement'}" class="ml-2 mr-3">Мои объявления</b-link>

                    <b-link :to="{name: 'user-profile'}" class="mx-2">Личный кабинет</b-link>
                    <btn
                        class="h-100 ml-3"
                        btnValue="Выйти"
                    />
                </div>
                <div v-else>
                    <btn
                        class=""
                        btnValue="Войти"
                    />
                    <btn
                        class="ml-4"
                        btnValue="Зарегистрироваться"
                    />
                </div>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

import btn from '../widgets/button/button-main'

export default {
    name: 'nav-bar',
    components:{
        btn,
    },
    data() {
        return {
            isLogged: true
        }
    },
    props:{
        
    },
    computed:{
        // isLogged(){
        //     return this.IS_LOGGED
        // }
    }
}
</script>

<style lang="sass">

</style>