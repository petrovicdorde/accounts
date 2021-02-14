import React, { useEffect, useRef, useState } from 'react';
import {useHistory, withRouter} from 'react-router-dom';

const AddAccount = ({addNewAccountToAccounts}) => {

    const [newAccount, setNewAccount] = useState({id: "", name: "", lastname: "", phone: "", email: ""});

    const idInput = useRef();

    useEffect(() => {
        idInput.current.focus();
    }, [idInput])

    const history = useHistory();

    const addNewAccount = () => {
        addNewAccountToAccounts(newAccount);
        history.push("/")
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Acount</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" ref={idInput} onChange={e => { setNewAccount({...newAccount,id:e.target.value})}} placeholder="id" className="form-control" /><br/>
                            <input type="text" onChange={e => { setNewAccount({...newAccount,name:e.target.value})}} placeholder="name" className="form-control" /><br/>
                            <input type="text" onChange={e => { setNewAccount({...newAccount,lastname:e.target.value})}} placeholder="lastname" className="form-control" /><br/>
                            <input type="text" onChange={e => { setNewAccount({...newAccount,phone:e.target.value})}} placeholder="phone" className="form-control" /><br/>
                            <input type="text" onChange={e => { setNewAccount({...newAccount,email:e.target.value})}} placeholder="email" className="form-control" /><br/>
                            <button onClick={()=>{addNewAccount()}} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AddAccount);