import React, {useCallback, useState} from "react";
import User from "../User/User";

/**
 * Component for create list with users
 * @param users {array}
 * @returns {JSX.Element}
 */
function List({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User isNest={!!(user.items && user.items.length)} user={user} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
