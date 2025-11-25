class User {
	#password;

	constructor(username, password) {
		this.username = username;
		this.#password = password;
	}

	getUsername() {
		return this.username;
	}

	validatePassword(password) {
		return this.#password === password;
	}
}

// Example usage:
const user = new User("john_doe", "securePassword123");

console.log(user.getUsername()); // Output: john_doe
console.log(user.validatePassword("securePassword123")); // Output: true
console.log(user.validatePassword("wrongPassword")); // Output: false

console.log(user.username); // Output: john_doe
// Attempting to access the private field directly will result in an error
// console.log(user.#password); // Uncaught SyntaxError: Private field '#password' must be declared in an enclosing class
export default User;
