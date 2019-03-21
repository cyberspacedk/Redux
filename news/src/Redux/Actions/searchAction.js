const searchAction = (evt)=>({
  type : "FILTER" ,
  payload : evt.target.value,
})

export default searchAction;