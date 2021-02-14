import React from 'react';
import Account from '../Account/Account';

const EditTable = ({accounts, deleteAccount}) => {

    const allAccounts = accounts.map( account => {
        return (
            <Account account={account} key={account.id} edit={true} deleteAccount={deleteAccount} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Edit/Delete</h3>
                    <div className="col-10 offset-1">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                    <th>Action</th>
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

export default EditTable;