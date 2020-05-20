<template>
    <div  class="test">
        <b-form-group :label="label" :label-for="labelFor">
            <b-form-input :id="id" type="number" :required="required" :placeholder="placeholder"></b-form-input>
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

<style lang="sass" scoped>
.test
    display: flex
    align-items: flex-end
</style>