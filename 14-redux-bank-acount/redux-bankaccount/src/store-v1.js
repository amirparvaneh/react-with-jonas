import { combineReducers, createStore } from "redux";

const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, loanPurpose: "buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, loanPurpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose },
  };
};

const payload = () => {
  return {
    type: "account/payLoan",
  };
};

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "buy a cheap car."));
store.dispatch(payload());

const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};

const updateCustomer = (fullName) => {
  return {
    type: "customer/updateCustomer",
    payload: fullName,
  };
};

store.dispatch(createCustomer("menzu samurai", "24321443"));

console.log(store.getState());
