<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-textarea 
            :id="labelFor" 
            :placeholder="placeholder" 
            :required="required" 
            :rows="rows"
            :value="value"
        >   
        </b-form-textarea>
    </b-form-group>
</template>

<script>

export default {
    name: 'description',
    props:{
        label:{
            type: String,
            default(){
                return 'label'
            }
        },
        rows:{
            type: String,
            default(){
                return '4'
            }
        },
        labelFor:{
            type: String,
            default(){
                return 'description'
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