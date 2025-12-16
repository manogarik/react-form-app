 import React,{useState} from "react";
 import "./UserForm.css";

 const UserForm = () =>{

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
 
 //On submission
 const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Name : ${name}\n Phone : ${phone}\n Email : ${email}`);
    //clearform
    setName("");
    setPhone("");
    setEmail("");
 };
 
 return(
    <form className="formstyle" onSubmit={handleSubmit}>
        <div>
            <label>Name  : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <div>
            <label>Phone : </label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your mobilenumber"/>

        </div>
        <div>
            <label>Email Address : </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your emailaddress"/>
        </div>
        <button type="submit">Submit</button>
    </form>
 );
};
export default UserForm;