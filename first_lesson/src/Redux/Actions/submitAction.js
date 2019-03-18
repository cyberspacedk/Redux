
export const submitAction = (text) => ({
    type: "CREATE",
    data: { 
        id: Date.now(),
        content: text,
    } 
  });
  