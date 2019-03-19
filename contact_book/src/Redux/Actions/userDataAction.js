
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








 
 
 
 
 