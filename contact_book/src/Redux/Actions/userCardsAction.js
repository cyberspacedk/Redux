const userCardsAction = (userData,edit)=> ({
  type: 'CREATE',
  data: {...userData},
  edit: edit,
});

export default userCardsAction;