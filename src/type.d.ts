interface ILoan {
    id: string,
    title: string,
    tranche: string,
    available: number,
    annualised_return: number,
    term_remaining: string,
    ltv: number,
    amount: number
}


type LoanState = {
    loans: ILoan[];
};

type LoanAction = {
    type: string;
    loan: ILoan;
};

type DispatchType = (args: LoanAction) => LoanAction;
