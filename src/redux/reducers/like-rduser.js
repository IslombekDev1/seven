const initialState = {
  likedProducts: []
}

//                                         dispatch qilinayotgan ma'lumot
const likedReduser =(state = initialState, action) => {
  console.log(action);
  switch(action.type){
    case "LIKE_PRODUCT":
      return {
        likedProducts: [action.product]
      }
    default:
      return state
  }
}

export default likedReduser;