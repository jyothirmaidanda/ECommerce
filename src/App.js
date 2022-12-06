import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './firebase/firebase.init';
import {useState} from "react";

initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
const [user, setUser] = useState({});

const handleGoogleSignIn = () => {
const auth = getAuth();
signInWithPopup(auth, provider)
.then(result => {
const user = result.user;
setUser(user);
}) .catch ((error) => {
console.log(error.message);
})
};

function handleSignOut() {
setUser({});
}
function purchaseLog() {
fetch("https://majestic-cairn-365919.uk.r.appspot.com/"+user.email)
.then(console.log('logged'))
.catch((error) => {
console.log('spring.mongo')
})
}

return (
<div>
    <button onClick={handleGoogleSignIn} className="button1">Google Sign In</button>
{
user.email && (

<div>
    <nav className="navbar">
        <ul className="links-container">
            <li className="link-item"><a href="#" className="link active">Home</a></li>
            <li className="link-item"><a href="https://jyothirmaidanda.github.io/SecureECommerce/home.html" className="link">About</a></li>
            <li className="link-item"><a href="https://jyothirmaidanda.github.io/SecureECommerce/" className="link">Information</a></li>
            <li className="link-item"><a href="https://jyothirmaidanda.github.io/SecureECommerce/contact.html" className="link">Contact</a></li>
        </ul>
    </nav>

    <h2 className="wel">
        Welcome to the Store! {user.displayName}
    </h2>

</div>
)
}
{
Object.keys(user).length === 0 && (
<div>
</div>
)
}
</div>
);
}

export default App;
