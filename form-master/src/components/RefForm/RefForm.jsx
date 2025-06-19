import React, { useEffect, useRef } from 'react';

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}  type="text" name='name' /><br />
                <input ref={emailRef} type="text" name='email' defaultValue={'rojoni@sonjoni.com'} /><br />
                <input ref={passRef} type="password" name='password'/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;