import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [ fullName, setfullName ]= useState("");
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            fullName: fullName,
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:4000/app/signup', newUser)
            .then(response => console.log(response.data));

        setfullName("");
        setUsername("");
        setEmail("");
        setPassword("");


    }

    return (
        <div className="App">
            <h1>Sign-up!</h1>
            <div className="container">
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="fullname">
                            Full Name
                        </label>
                        <input 
                            name="fullname" 
                            placeholder="Full Name Here" 
                            type="text"
                            value={ fullName }
                            onChange={(e) => setfullName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">
                            Username
                        </label>
                        <input 
                            name="username" 
                            placeholder="Username Here" 
                            type="text"
                            value={ username }
                            onChange={(e) => setUsername(e.target.value)}    
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input 
                            name="email" 
                            placeholder="Email Address" 
                            type="email"
                            value={ email }
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            name="password" 
                            placeholder="Enter Password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={ handleSubmit }>SIGN-UP</button>
                </form>
            </div>
        </div>
    );
}

export default App;