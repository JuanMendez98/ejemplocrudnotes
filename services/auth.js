

export async function loginUser(identifier, password) {
const response = await fetch("http://localhost:3000/users");
const users = await response.json();

return users.find(
    (user) =>
    (user.username === identifier || user.email === identifier) &&
    user.password === password
);
}
