const userCardsAction = (userData)=> ({
  type: 'CREATE',
  data: {...userData, id: Date.now},
});

export default userCardsAction;