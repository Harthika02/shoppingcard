export const CardReducer=(state ,action)=>{
const{type ,payload}=action

  switch(type){
    case"ADD-TO-CART":
    return {...state ,cartList:payload.products}
    case"REMOVE-FROM-CART":
    return {...state ,cartList:payload.products}
    case "UPDATED-TOTAL":
    return {...state ,total:payload.total}
    default :
    throw new Error("no case fund in cardreducer")
  }
}