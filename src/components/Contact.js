import React, { useState } from "react";

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(<>
        <div className="text-center">
        <h2>Contact</h2>
        </div>
        <div className="row justify-content-center">
        <form className="col-8" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                />
            </div>
            <br />
            <button className="btn btn-secondary">Submit</button>
        </form>
        </div>
    </>)
};

export default Contact;