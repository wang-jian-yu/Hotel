export default{
    get UserToken(){
        console.log(`get`)
        return localStorage.getItem('token')
    },
    set UserToken(token){
        console.log(`set`)
        localStorage.setItem('token',token)
    }


}