import React, { useCallback, useState } from "react";
import List from "../List/List";
import classnames from "classnames";
import "./User.css";

/**
 * Component for render user
 * @param user {object}
 * @param isNest {boolean}
 * @returns {JSX.Element}
 */
function User({ user, isNest }) {
  const [isChildrenVisible, setChildrenVisible] = useState(false);

  /**
   * Callback for changing isChildrenVisible(opening and closing a nested user)
   * @type {function(*): void}
   */
  const onClick = useCallback(
    (event) => {
      event.stopPropagation();
      setChildrenVisible(!isChildrenVisible);
    },
    [isChildrenVisible]
  );

  return (
    <div className="user" onClick={onClick}>
      <div className={classnames({ nestUser: isNest })}>{user.name}</div>
      {isNest && isChildrenVisible ? <List users={user.items} /> : null}
    </div>
  );
}

export default User;
