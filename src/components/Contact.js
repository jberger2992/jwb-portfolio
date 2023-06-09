import React, { useState } from "react";

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(<>
        <h2>Contact</h2>
        <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <input
                type="text"
                name="message"
                placeholder="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
            />
            <br />
            <button>Submit</button>
        </form>
    </>)
};

export default Contact;