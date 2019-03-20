
export const userDataActionFname = (evt) => ({
  type: "FIRSTNAME",
  name: evt.target.name,
  value: evt.target.value,
});

export const userDataActionLname = (evt) => ({
  type: "LASTNAME",
  name: evt.target.name,
  value: evt.target.value,
});

export const userDataActionPhone = (evt) => ({
  type: "PHONE",
  name: evt.target.name,
  value: evt.target.value,
});
export const userDataActionEmail = (evt) => ({
  type: "EMAIL",
  name: evt.target.name,
  value: evt.target.value,
});
export const userDataActionDate = (evt) => ({
  type: "DATE",
  name: evt.target.name,
  value: evt.target.value,
});

export const userDataActionClear = ()=> ({
  type: 'CLEAR',
})

export const editModeAction = (evt, arr)=>({
  type: "EDITMODE",
  data: arr.find(elem=>  elem.id == evt.target.dataset.edit), 
})

export const editModeCloseAction = ()=>({
  type: "CLOSEEDITMODE",
})
  