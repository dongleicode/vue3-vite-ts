import router from '../router'

const utils = {
    goBack(){
        router.back()
    },
    goPage(path, query){
        router.push({
            path,
            query
        })
    },
   
}

export default utils