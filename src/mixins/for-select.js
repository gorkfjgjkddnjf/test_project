let forSelect = {
    data(){
        return{
        category:[
                {value: null, text: 'Категория'},
                {value: '1', text: 'Недвижимость'},
                {value: '2', text: 'Транспорт'},
                {value: '3', text: 'Личные вещи'},
                {value: '4', text: 'Хобби и отдых'},
                {value: '5', text: 'услуги'},
                {value: '6', text: 'Бытовая техника'}
            ],
            status:[
                {value: null, text: 'Статус'},
                {value: '1', text: 'Активное'},
                {value: '2', text: 'Закрытое'},
            ],
        }
    }
} 

export default forSelect