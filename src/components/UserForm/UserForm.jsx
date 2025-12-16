 import React,{useState} from "react";
 import "./UserForm.css";

 const UserForm = () =>{

    const [name, setName] = useState("");
 
 //On submission
 const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Name : ${name}`);
    //clearform
    setName("");
 };
 
 return(
    <form className="formstyle" onSubmit={handleSubmit}>
        <div className="formstyle">
            <label>Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <button type="submit">Submit</button>
    </form>
 );
};
export default UserForm;