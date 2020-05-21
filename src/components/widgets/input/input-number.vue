<template>
    <div  class="test">
        <b-form-group :label="label" :label-for="labelFor">
            <b-form-input 
            :id="labelFor" 
            type="number" 
            :required="required" 
            :placeholder="placeholder"
            :value="value"
        ></b-form-input>
        </b-form-group>
        <p class="mb-4 px-2">руб</p>
    </div>
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
                return 'input-number'
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
            type: Number,
            default(){
                return 0
            }
        },
    }
}
</script>

<style lang="sass" scoped>
.test
    display: flex
    align-items: flex-end
</style>