<template>
    <div>

        <popup v-if="editing" @close="close" btnOk="Сохранить изменения">
            <template v-slot:head>
                <h2 class="text-center">Изменить объявление</h2>
            </template>
            <b-form>
                <inputMain
                    label="Заголовок"
                    id="title"
                    labelFor="title"
                    :value="item.title"
                />
                <label for="category">Категория</label>
                <tselect id="category" 
                    :options="category"
                    :value="item.category"
                />
                <description
                    label="Описание"
                    :value="item.description"
                />
                <label for="city">Город</label>
                <tselect id="sity"
                    
                />
                <inputNumber
                    label="Цена"
                    labelFor="price"
                    :value="item.price"
                />

                <inputFile
                    @files="renderPreview"
                   
                    label="Вы можете загрузить фотографию в формате jpeg, jpg, png, весом не более 10 Мб"
                />
                <b-row class="image">
                    <div class="col-3 mr-3 mb-3 delete-wrapper" v-for="img in item.img" :key="img.id">
                        <b-img :src="img.img" fluid></b-img>
                        <p @click="remove" class="delete">Удалить</p>
                    </div>
                </b-row>
            </b-form>
        </popup>

        <popup v-if="isVisibleAdd" @close="close" @confirm="confirm" btnOk="Добавить">
            <template v-slot:head>
                <h2 class="text-center">Добавить объявление</h2>
            </template>
            <b-form>
                <inputMain
                    label="Заголовок" 
                    id="title"
                    labelFor="title"
                />
                <label for="category">Категория</label>
                <tselect id="category" 
                    :options="category"
                />
                <description
                    label="Описание"
                />
                <label for="city">Город</label>
                <tselect id="sity"
                    
                />
                <inputNumber
                    label="Цена"
                    labelFor="price"
                />

                <inputFile
                    @files="renderPreview"
                    label="Вы можете загрузить фотографию в формате jpeg, jpg, png, весом не более 10 Мб"
                />
                <b-row class="image">

                </b-row>
            </b-form>
        </popup>

        <popup v-if="isVisibleLogIn" @close="close" btnOk="Войти">
            <template v-slot:head>
                <h2>Авторизация</h2>
            </template>
            <b-form>
                <inputMain
                    type="email"
                    label="Email:"
                    labelFor="email"
                />
                <inputMain
                    type="password"
                    label="Password:"
                    labelFor="pass"
                />
            </b-form>
        </popup>
      
        <popup v-if="isVisibleLogUp" @close="close" btnOk="Зарегистрироваться">
            <template v-slot:head>
                <h2>Регистрация</h2>
            </template>
            <b-form>
                <inputMain
                    type="email"
                    label="Email:"
                    labelFor="email"
                />
                <inputMain
                    type="password"
                    label="Password:"
                    labelFor="pass"
                />
            </b-form>
        </popup>
    </div>
</template>

<script>

import popup from './popup'
import tselect from '../widgets/input/select'
import inputNumber from '../widgets/input/input-number'
import inputFile from '../widgets/input/input-file'
import description from '../widgets/textarea/description'
import inputMain from '../widgets/input/input-main'
import forSelect from '../../mixins/for-select'

export default {
    name:'popup-wrapper',
    mixins:[
        forSelect
    ],
    components:{
        popup,
        inputMain,
        description,
        inputFile,
        inputNumber,
        tselect,
    },
    props:{
        isVisibleAdd:{
            type: Boolean,
            default(){
                return false
            }
        },
        isVisibleLogIn:{
            type: Boolean,
            default(){
                return false
            }
        },
        isVisibleLogUp:{
            type: Boolean,
            default(){
                return false
            }
        },
        editing:{
            type: Boolean,
            default(){
                return false
            }
        },
        item:{
            type: Object,
            default(){
                return {}
            }
        },
    },
    methods:{
        close(){
            this.$emit('close')
        },
        renderPreview(files){
            let wrapper = document.querySelector('.image')
            files.forEach(element => {
                let reader  = new FileReader();
                let col = document.createElement('div')
                let img = document.createElement('img')
                let close = document.createElement('p')
                close.textContent = 'Удалить'

                col.className='col-3 mr-3 mb-3 delete-wrapper'
                img.className = "img-fluid"

                reader.onloadend = function () {
                    img.src = reader.result;
                }

                reader.readAsDataURL(element)
                col.append(img, close)
                wrapper.append(col)

                close.addEventListener('click', function(){
                    col.remove()
                })
            });
        },
        remove(e){
            e.target.parentElement.remove()
        },
        confirm(){
            console.log(2)
            this.$emit('test')
        }
    }
}
</script>

<style lang="sass" scoped>

</style>