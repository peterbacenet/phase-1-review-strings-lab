const currentUser = 'Peter Bacenet' ;
const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase(); //() invoked it to make it work immediately
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!` //0->1 to take the first intitial
console.log(shortGreeting)