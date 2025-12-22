 import React,{useState} from "react";
 import "./UserForm.css";

 const UserForm = () =>{

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
 
 //On submission
 const handleSubmit = async(e) =>{
    e.preventDefault();
    const userData = {
        name : name,
        phone: phone,
        email: email
    };
    try{
        const response = await fetch("http://localhost:5000/users", {
            method : POST,
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(userData)
        });
        if(response.ok){
            alert("Data saved successfully!");
            setName("");
            setPhone("");
            setEmail("");
        }
        else{
            alert("Failed to save data");
        }
    }
    catch (error){
        console.error(error);
        alert("Server error");
    }
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