 import React,{useState} from "react";
 import "./UserForm.css";

 const UserForm = () =>{

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
 
 //On submission
 const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Name : ${name}\n Phone : ${phone}`);
    //clearform
    setName("");
 };
 
 return(
    <form className="formstyle" onSubmit={handleSubmit}>
        <div>
            
            <label>Name  : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <div>
            <label>Phone : </label>
            <input type="tel" value={phone} on onChange={(e) => setPhone(e.target.value)} placeholder="Enter your mobilenumber"/>

        </div>
        <button type="submit">Submit</button>
    </form>
 );
};
export default UserForm;