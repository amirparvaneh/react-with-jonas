const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
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
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export const deposit = (amount, currency) => {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async (dispatch, getState) => {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
};

export const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

export const requestLoan = (amount, loanPurpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose },
  };
};

export const payloan = () => {
  return {
    type: "account/payLoan",
  };
};

export default accountReducer;
