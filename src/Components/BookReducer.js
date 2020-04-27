const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      console.log("this is case1");
      break;
    }
    default: {
      console.log("this is case2");
    }
  }
};
export default BookReducer;
