import * as actionTypes from "./actionTypes";

export function updateLoan(loan: ILoan) {
    const action: LoanAction = {
        type: actionTypes.UPDATE_LOAN,
        loan
    };
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: LoanAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    };
}
