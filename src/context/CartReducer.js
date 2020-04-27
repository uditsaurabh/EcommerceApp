import NotificationSystem from "react-notification-system";

export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload];
    }
    case "REMOVE_FROM_CART": {
      state = state.filter((el) => {
        return el.isbn !== action.payload.isbn;
      });

      return [...state];
    }
    case "CHANGE_THE_QUANTITY": {
      let index = state.findIndex((obj) => {
        return obj.isbn === action.payload.isbn;
      });
      state[index].quantity = action.updated;
      return [...state];
    }
  }
};
