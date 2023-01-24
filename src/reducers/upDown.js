const initialState = 10;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state++;
    case "DECREMENT":
      return state--;
    default:
      return state;
  }
};

export default changeTheNumber;
