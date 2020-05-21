<template>
    <div class="popup-wrapper">
        <b-container class="carousel px-0">
            <b-row class="justify-content-between test">
            <b-col>
                <h3 class="ml-2">Фотография {{slide+1}}</h3>
            </b-col>
            <b-col class="text-right mr-2">
                <b-iconstack font-scale="2" class="mr-2" @click="prev">
                    <b-icon stacked icon="circle"></b-icon>
                    <b-icon stacked icon="arrow-left" ></b-icon>
                </b-iconstack>
                <b-iconstack font-scale="2" class="mr-2" @click="next">
                    <b-icon stacked icon="circle"></b-icon>
                    <b-icon stacked icon="arrow-right"></b-icon>
                </b-iconstack>               
                <b-icon icon="plus-circle" font-scale="2" rotate="45" @click="closeCarousel"></b-icon>
            </b-col>
        </b-row>
        
        <b-carousel
            id="carousel-1"
            ref="myCarousel"
            v-model="slide"
        >
            <!-- Slides with image only -->
            <b-carousel-slide v-for="img in image" :key="img.id" :img-src="img.img"></b-carousel-slide>

        </b-carousel>
        </b-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,   
      }
    },
    props:{
        image:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        prev() {
            this.$refs.myCarousel.prev()
        },
        next() {
            this.$refs.myCarousel.next()
        },
        closeCarousel(){
            this.$emit('closeCarousel')
        }
    },
}
</script>

<style lang="sass" scoped>
    
.container 
    background: #ffffff
    width: 100%
    padding-right: 15px
    padding-left: 15px
    margin-right: auto
    margin-left: auto
</style>