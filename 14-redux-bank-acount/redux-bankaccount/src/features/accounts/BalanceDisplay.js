import { connect, useDispatch, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

//old way
// const mapStateToProps = (state) => {
//   console.log(state.account);
//   return {
//     balance: state.account.balance,
//   };
// };

//export default connect(mapStateToProps)(BalanceDisplay);
export default BalanceDisplay;
