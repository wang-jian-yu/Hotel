export default{
    LOGIN_IN(state,token){
        console.log("LOGIN_IN");

        state.UserToken = token
      },
      LOGIN_OUT(state){
          console.log("LOGIN_OUT");
        state.UserToken = ''
      }


}