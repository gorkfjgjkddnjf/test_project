import axios from 'axios'

export default {
    GET_ADVERTISEMENT({commit},num){
        return new Promise((resolve, reject) => {
            axios(`http://localhost:3000/advertisement?_page=${num}&_limit=20`,{
                method: 'GET'
            })
            .then((resp) => {
               commit('SET_ADVERTISEMENT', resp.data)
               resolve()
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    GET_USER_ADVERTISEMENT({commit}, id){
        return new Promise((resolve, reject) => {
            axios(`http://localhost:3000/advertisement?user_id=${id}`,{
                method: 'GET'
            })
            .then((resp) => {
               commit('SET_USER_ADVERTISEMENT', resp.data)
               resolve()
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    CLOSE_ADVERTISEMENT({commit},index){
        commit('CLOSE_ADVERTISEMENT',index)
    },
    GET_USER({commit},id){
        return new Promise((resolve, reject) => {
            axios(`http://localhost:3000/users?id=${id}`,{
                method: 'GET'
            })
            .then((resp) => {
               commit('SET_USER', resp.data)

               resolve()
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}