<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="6" sm="3" md="3" xl="2">
                <img src="../../assets/images/1.png" alt="photo" class="img-fluid">
                <btnSave
                    :block="true"
                />
            </b-col>
            <b-col sm="9" lg="6">
                <b-form>
                    <inputMain
                        label="Имя"
                        labelFor="name"
                    />
                    <label for="select">Город</label>
                    <selectCity id="select"
                    
                    />
                    <inputMain
                        label="Телефон"
                        labelFor="tel"
                    />
                    <description
                        label="О себе"
                    />
                </b-form>
                <btnSave
                    btnValue="Сохранить"
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import description from '../widgets/textarea/description'
import inputMain from '../widgets/input/input-main'
import btnSave from '../widgets/button/button-main'
import selectCity from '../widgets/input/select'

export default {
    name: 'user-profile',
    components:{
        description,
        btnSave,
        inputMain,
        selectCity
    }

}
</script>

<style>

</style>