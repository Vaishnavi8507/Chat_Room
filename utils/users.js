const users = []; // Array to hold user objects

function userJoin(id, username, room) {
    const user = { id, username, room }; // Create a user object
    users.push(user); // Push the user object into the users array
    return user; // Return the user object
}

function getCurrentUser(id) {
    return users.find(user => user.id === id); // Find a user by ID
}

function userLeave(id) {
    const index = users.findIndex(user => user.id === id); // Find user index by ID
    if (index !== -1) {
        return users.splice(index, 1)[0]; // Remove user from array and return it
    }
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room); // Get users in a specific room
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
};
