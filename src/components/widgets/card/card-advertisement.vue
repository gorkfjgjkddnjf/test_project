<template>
    <b-col cols="12" md="6" xl="4">
        <b-card
            :title="advertisement_data.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            class="mx-2 my-3"
        >
            <b-card-text>
                Цена: {{advertisement_data.price}} руб
            </b-card-text>
            <b-card-text>
                {{advertisement_data.date}}
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>

export default {
    name: 'card-advertisement',
    components:{

    },
    props:{
        advertisement_data:{
            type: Object,
            default(){
                return{}
            }
        },
    }
}
</script>

<style lang="sass">

</style>