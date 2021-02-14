import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditAccount from "./components/EditAccount/EditAccount";
import EditTable from "./components/EditTable/EditTable";
import Header from "./components/Header/Header";

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("/data/accounts-app")
    .then(res=> res.json())
    .then(backAccounts => {
      setAccounts(backAccounts);
    })
  })

  const addNewAccountToAccounts = (acc) => {
      setAccounts([...accounts, acc]);
  }

  const deleteAccount = (id) => {
      const newCopyAccount = accounts.filter(account => account.id !== id);
      setAccounts(newCopyAccount);
  }

  const editAccount = (acc) => {
    const accountPosition = accounts.map(account => account.id).indexOf(acc.id);
    accounts[accountPosition] = acc;
    setAccounts(accounts);
  }

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <AccountsTable accounts={accounts} ></AccountsTable>
      </Route>

      <Route path="/add">
          <AddAccount addNewAccountToAccounts={addNewAccountToAccounts} />
      </Route>

      <Switch>
        <Route path="/edit/:id">
          <EditAccount accounts={accounts} editAccount={editAccount} />
        </Route>

        <Route path="/edit">
            <EditTable accounts={accounts} deleteAccount={deleteAccount} />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
