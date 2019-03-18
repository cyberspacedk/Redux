

export const change = evt => ({
  type: "TYPING",
  value: evt.target.value
});

export const clear = ()=>({
  type : 'CLEAR', 

})