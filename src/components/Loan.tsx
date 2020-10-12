import * as React from "react";
import {
    Card, Button, CardTitle, CardText, CardBody, CardSubtitle, FormGroup, Label, Input
} from "reactstrap";
import Popup from "reactjs-popup";

type Props = {
    loan: ILoan;
    updateLoan: (loan: ILoan) => void;
};

export const Loan: React.FC<Props> = ({ loan, updateLoan }) => {
    const [_, setLoan] = React.useState<ILoan | {}>();


    const handleLoanData = (e: React.FormEvent<HTMLInputElement>) => {
        setLoan({
            ...loan,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewInvestment = (e: React.FormEvent) => {
        e.preventDefault();
        updateLoan(loan);
    };

    return (
        <div className="Loan">
            <div>
                <h3>{loan.title}</h3>
                <p>Available to invest £{loan.available}</p>
            </div>
            <Popup className="Loan" trigger=
                {<button
                // disabled={loan.isInvested ? true : false}
                >Invest
                    </button>} >
                {(close: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined) => (
                    < Card className="list-unstyled mt-3 mb-4 card shadow">
                        <CardBody>
                            <a className="close" onClick={close}>&times;</a>
                            <br></br>
                            <CardTitle><h3>Invest in Loan</h3></CardTitle>
                            <CardSubtitle>
                                <h5>{loan.title}</h5>
                            </CardSubtitle>
                            <CardText>
                                Amount available: £{loan.available}
                                <br />
                                    Loan ends in: {loan.term_remaining}
                            </CardText>
                            <FormGroup className="Add-loan">
                                <Label>Investment amount (£)</Label>
                                <Input
                                    type="number"
                                    id="investedAmount"
                                    placeholder="Invest"
                                    onChange={handleLoanData}
                                />
                                <Button onClick={addNewInvestment}>Invest</Button>
                            </FormGroup>
                        </CardBody>
                    </Card >
                )}
            </Popup>
        </div>

    );
};
