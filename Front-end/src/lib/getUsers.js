/**
 * Searching current location
 * @type {any}
 */
let location = window.location;

/**
 * Get information about users from JSON
 * @returns {Promise<JSON>}
 */
export async function getUsers() {
  return await fetch(`${location}/users.json`).then((response) =>
    response.json()
  );
}
