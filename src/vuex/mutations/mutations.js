export default {
    SET_ADVERTISEMENT:(state, data) => {
        state.advertisement = data
    },
    CLOSE_ADVERTISEMENT:(state, index) => {
        state.userAdvertisement[index].status = 'Закрытое'
    },
    SET_USER:(state, user) => {
        state.advertisement.forEach(element => {
            if(element.user_id==user[0].id){
                user[0].countAdvert++
            }
        });
        state.user = user
    },
    SET_USER_ADVERTISEMENT:(state, data) => {
        state.userAdvertisement = data
    },
}