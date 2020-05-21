<template>
    <b-form-group :label="label" :label-for="labelFor">
        <b-form-file 
            :id="labelFor" 
            type="file" 
            :required="required" 
            :placeholder="placeholder" 
            accept=".jpg,.jpeg,.png"
            @change="files"
        ></b-form-file>
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
        labelFor:{
            type: String,
            default(){
                return 'input-file'
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
    },
    methods:{
        files(event){
            this.$emit('files',event.target.files)
        }
    }
}
</script>

<style lang="sass">

</style>