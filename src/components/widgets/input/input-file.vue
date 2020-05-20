<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-file :id="id" type="file" :required="required" :placeholder="placeholder" accept=".jpg,.jpeg,.png"></b-form-file>
    </b-form-group>
</template>

<script>

export default {
    name: 'input-file',
    props:{
        label:{
            type: String,
            default(){
                return 'label'
            }
        },
        id:{
            type: String,
            default(){
                return 'input'
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
    }
}
</script>

<style lang="sass">

</style>