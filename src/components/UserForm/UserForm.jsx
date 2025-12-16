 import React,{useState} from "react";

 const userForm = () =>{

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
            <Label>Name : </Label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <button type="submit">Submit</button>
    </form>
 );
};
export default userForm;