import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";
import { Loan } from "./components/Loan";
import { updateLoan } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const loans: readonly ILoan[] = useSelector(
    (state: LoanState) => state.loans,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const addNewInvestment = React.useCallback(
    (loan: ILoan) => dispatch(updateLoan(loan)),
    [dispatch]
  );

  return (
    <main>
      <h4>My Loans</h4>
      {loans.map((loan: ILoan) => (
        <Loan
          key={loan.id}
          loan={loan}
          updateLoan={addNewInvestment}
        />
      ))}
      <br />
      <h5 className="footer text-muted">Total amount available for investments:
            £{loans.reduce((prev, curr) => prev + curr.available, 0).toFixed(3)}</h5>
    </main>
  );
};

export default App;
