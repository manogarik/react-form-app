 import React,{useState} from "react";

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
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <button type="submit">Submit</button>
    </form>
 );
};
export default UserForm;