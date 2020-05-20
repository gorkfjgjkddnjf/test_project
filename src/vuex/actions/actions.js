import axios from 'axios'

export default {
    GET_ADVERTISEMENT({commit}){
        return new Promise((resolve, reject) => {
            axios(`http://localhost:3000/advertisement`,{
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
}