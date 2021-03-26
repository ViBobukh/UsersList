import React, { useCallback, useMemo, useState } from "react";
import { users } from "../../lib/hardCode";
import "./App.css";
import List from "../List/List";
import { filter } from "../../lib/filter";

/**
 * Main components with input and filter
 * @returns {JSX.Element}
 */
function App() {
  const [allUsers, setUsers] = useState(users);
  const [titleName, setTitleName] = useState("");
  const [titleEmail, setTitleEmail] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  /**
   * Callback for setting title by text of input
   * @type {function(*): void}
   */
  const searching = useCallback(
    (event) => {
      switch (event.currentTarget.name) {
        case "name":
          setCurrentInput("name");
          setTitleName(event.currentTarget.value);
          break;
        case "email":
          setCurrentInput("email");
          setTitleEmail(event.currentTarget.value);
          break;
      }
    },
    [titleName, titleEmail]
  );

  /**
   * ReactHook with changed array users
   * @type {Array}
   */
  const filteredUsers = useMemo(() => {
    switch (currentInput) {
      case "name":
        return filter(allUsers, titleName, currentInput);
      case "email":
        return filter(allUsers, titleEmail, currentInput);
    }
  }, [titleName, titleEmail, allUsers]);

  return (
    <div>
      <input
        onChange={searching}
        value={titleName}
        name="name"
        placeholder="Name searching"
      />
      <input
        name="email"
        onChange={searching}
        value={titleEmail}
        placeholder="Email searching"
      />
      <List users={titleName || titleEmail ? filteredUsers : allUsers} />
    </div>
  );
}

export default App;
