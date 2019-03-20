const convertAction = (evt, baseC) => ({
  type: evt.target.dataset.name,
  base: baseC,
  bid: evt.target.dataset.buy
});

export default convertAction;
