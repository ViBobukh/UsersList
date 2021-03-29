/**
 * Function for filtering user by name or email
 * @param arr {array}
 * @param searchString {string}
 * @param filterType {string}
 * @returns {array}
 */
export function filter(arr, searchString, filterType) {
  const users = getFlatArrayWithUsers(arr);
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
function getFlatArrayWithUsers(arr) {
  const newArr = arr.map((users) => {
    const { items, ...user } = users;
    return items && items.length
      ? [user, ...getFlatArrayWithUsers(items)]
      : [user];
  });
  return newArr.flat(1);
}
