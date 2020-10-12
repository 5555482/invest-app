import * as actionTypes from "./actionTypes"

const initialState: LoanState = {
    loans: [
        {
            id: "1",
            title: "Voluptate et sed tempora qui quisquam.",
            tranche: "A",
            available: 11.959,
            annualised_return: 8.60,
            term_remaining: "864000",
            ltv: 48.80,
            amount: 85.754,
        },
        {
            id: "5",
            title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
            tranche: "B",
            available: 31.405,
            annualised_return: 7.10,
            term_remaining: "1620000",
            ltv: 48.80,
            amount: 85.754,
        },
        {
            id: "12",
            title: "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
            tranche: "C",
            available: 12.359,
            annualised_return: 4.80,
            term_remaining: "879000",
            ltv: 48.80,
            amount: 85.754,
        }
    ]
}

const reducer = (
    state: LoanState = initialState,
    action: LoanAction
): LoanState => {
    switch (action.type) {
        case actionTypes.UPDATE_LOAN:
            const updatedLoans: ILoan[] = state.loans.map(
                loan => {
                    if (loan.id === action.loan.id && action.loan.available >= 0) { // update with the real input data N action.loan.available >= N
                        loan.available -= 10.000 // update with the real input data N
                        console.log("HHH" + JSON.stringify(loan))
                        return loan
                    } else { return loan }
                }
            )
            return {
                ...state,
                loans: updatedLoans,
            }
    }

    return state
}

export default reducer