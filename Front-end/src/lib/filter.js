/**
 * Function for filtering user by name or email
 * @param arr {array}
 * @param searchString {string}
 * @param filterType {string}
 * @returns {array}
 */
export function filter(arr, searchString, filterType) {
  const users = getUsers(arr);
  const words = searchString.split();
  return users.filter((user) => {
    return words.every((word) => {
      if (filterType === "name") {
        return user.name.toLowerCase().indexOf(word.toLowerCase()) !== -1;
      } else if (filterType === "email") {
        return user.email.toLowerCase().indexOf(word.toLowerCase()) !== -1;
      }
    });
  });
}

/**
 * Function for create array with users without nesting levels
 * @param arr {array}
 * @returns {array}
 */
export function getUsers(arr) {
  const newArr = arr.map((users) => {
    const { items, ...user } = users;
    return items && items.length ? [user, ...getUsers(items)] : [user];
  });
  return newArr.flat(1);
}
