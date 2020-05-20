<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-input :id="labelFor" type="password" :required="required" :placeholder="placeholder" size="lg"></b-form-input>
    </b-form-group>
</template>

<script>

export default {
    name: 'input-pass',
    props:{
        label:{
            type: String,
            default(){
                return 'label'
            }
        },
        // id:{
        //     type: String,
        //     default(){
        //         return 'input'
        //     }
        // },
        labelFor:{
            type: String,
            default(){
                return 'input'
            }
        },
        placeholder:{
            type: String,
            default(){
                return ''
            }
        },
        required:{
            type: Boolean,
            default(){
                return false
            }
        },
    }
}
</script>

<style lang="sass">

</style>