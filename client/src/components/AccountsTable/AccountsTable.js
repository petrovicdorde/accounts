import React from 'react';
import Account from '../Account/Account';

const AccountsTable = ({accounts}) => {

    const allAccounts = accounts.map( account => {
        console.log("AAAAAAAAAAAAA", account)
        return (
            <Account account={account} key={account.id} />
        )
    })

    return (
        <div className="container text-white bg-dark rounded">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Accounts</h3>
                    <div className="col-10 offset-1">
                        <table className="table text-white bg-dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allAccounts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountsTable;