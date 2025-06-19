import { useState } from "react";

const StatefulForm = () => {
    const[name, setName] = useState(null);
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        
    }
    const handleName = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePassword} type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;