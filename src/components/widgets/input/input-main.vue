<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-input 
            :id="labelFor" 
            :type="type" 
            :required="required" 
            :placeholder="placeholder" 
            size="lg"
            :value="value"
        ></b-form-input>
    </b-form-group>
</template>

<script>

export default {
    name: 'input-email',
    props:{
        label:{
            type: String,
            default(){
                return 'label'
            }
        },
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
        type:{
            type: String,
            default(){
                return 'text'
            }
        },
        value:{
            type: String,
            default(){
                return ''
            }
        },
    }
}
</script>

<style lang="sass">

</style>