import * as React from "react";

type Props = {
    updateLoan: (loan: ILoan | any) => void;
};

export const AddLoan: React.FC<Props> = ({ updateLoan }) => {
    const [loan, setLoan] = React.useState<ILoan | {}>();

    const handleLoanData = (e: React.FormEvent<HTMLInputElement>) => {
        setLoan({
            ...loan,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewLoan = (e: React.FormEvent) => {
        e.preventDefault();
        updateLoan(loan);
    };

    return (
        <form onSubmit={addNewLoan} className="Add-loan">
            <input
                type="number"
                id="investedAmount"
                placeholder="Invest"
                onChange={handleLoanData}
            />
            <button >
                Invest
      </button>
        </form>
    );
};
