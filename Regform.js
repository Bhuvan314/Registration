import React from "react";
import {useState} from 'react';
import './Rindex.css';
function RegistrationForm(){//this use state mathod which appects two
const[firstname, setFirstname]=useState("")
const [firstnameError, setFirstnameError] = useState(false);
const[lastname, setLastname]=useState("")
const [lastnameError, setLastnameError] = useState(false);
const[mobilenumber, setMobilenumber]=useState("")
const[email, setEmail]=useState("")
const [emailError, setEmailError] = useState(false);
const[password, setPassword]=useState("")
const[mobileNumberError, setMobileNumberError] = useState(false); // New state for mobile number validation
const[confpassword, setConfpassword]=useState("")
const[passwordError, setPasswordError]=useState("")
const[dob, setDob]=useState("")
const[gender, setSelectedOption]=useState("")
const[selectstate, setSelectstate]=useState("")
const[selectcourse, setSelectcourse]=useState("")
const[deliverymode, setSelectedDelivery]=useState("")
const[comments, setComments]=useState("")
const handleOptionChange=(event)=>{ //this are the function where updated data are stored
setSelectedOption(event.target.value);
};
const handleOption=(event)=>{ //this are the function where updated data are stored
setSelectedDelivery(event.target.value);
};
const handleSubmit= (e) => { //handle form submission logic here
e.preventDefault();
if(password !== confpassword){
setPasswordError(true);
} //this if condition logic for the password validation
else{
setPasswordError(false);

if (mobilenumber.length !== 10) {
    setMobileNumberError(true);
    return handleSubmit;
    // alert("Invalid mobile number. Please enter 10 digits.");
    // return;
  } else {
    setMobileNumberError(false);
  }
   // Firstname Validation
   if (firstname.trim() === "") {
    setFirstnameError(true);
    return;
  } else {
    setFirstnameError(false);
  }
   // Lastname Validation
   if (lastname.trim() === "") {
    setLastnameError(true);
    return;
  } else {
    setLastnameError(false);
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setEmailError(true);
    return;
  } else {
    setEmailError(false);
  }

//alert("Password submitted successfully!!");
console.log("Firstname: ",firstname);
console.log("Lastname: ", lastname );
console.log("Mobilenumber: ",mobilenumber );
console.log("Email:",email);
console.log("Password: ", password);
console.log("ConfirmPassword: ",confpassword );
console.log("DOB: ",dob );
console.log("Gender ",gender );
console.log("SelectState ",selectstate );
console.log("SelectCourse ",selectcourse );
console.log("DeliveryMode: ", deliverymode );
console.log("comments: ", comments);
alert("your response updated successfully:" + firstname)
}
//window.location.reload()
//
};
return(
<>
<form className="registration-form" onSubmit={handleSubmit}>
<fieldset>
<legend>Personal Information</legend>
<div className="form-group">
<label htmlFor="firstname">Firstname:</label>
<input placeholder="Enter your Firstname"
type="text"
id="firstname"
value={firstname}
onChange={(e)=> setFirstname(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="lastname">Lastname:</label>
<input placeholder="Enter your lastname"
type="text"
id="lastname"
value={lastname}
onChange={(e)=> setLastname(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="mobilenumber">Mobile Number:</label>
<input placeholder="Enter your mobile number" maxLength={"10"}
type="text"
id="mobilenumber"
value={mobilenumber}
onChange={(e)=> setMobilenumber(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input placeholder="Enter your Email"
type="text"
id="email"
value={email}
onChange={(e)=> setEmail(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="passwprd">Password:</label>
<input placeholder="*********" maxLength={"10"}
type="password"
id="password"
name="password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="password">Confirm Password:</label>
<input placeholder="confirm password" maxLength={"10"}
type="password"
id="confpassword"
name="confpassword"
value={confpassword}
onChange={(e)=> setConfpassword(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="dob">DOB:</label>
<input type="date"
id="dob"
value={dob}
onChange={(e)=> setDob(e.target.value)}
required
/>
</div>
<div className="form-group1">
<label htmlFor="gender">Gender:</label>
<input className="gender" type="radio" value="Male" checked={gender === "Male"}
onChange={handleOptionChange}/><label>Male</label>
<input className="gender" type="radio" value="Female" checked={gender === "Female"}
onChange={handleOptionChange}/><label>Female</label>
<input className="gender" type="radio" value="Others" checked={gender === "Others"}
onChange={handleOptionChange}/><label>Others</label>
</div>
<div className="form-group">
<label htmlFor="selectstate">SelectState:</label>
<select id="selectsate"
value={selectstate}
onChange={(e)=>setSelectstate(e.target.value)}
required>
<option></option>
<option>Karnataka</option>
<option>Andhra Pradesh</option>
<option>Maharastra</option>
<option>Kerala</option>
<option>Tamil Nadu</option>
</select>
</div>
</fieldset>
<fieldset>
<legend>Course Information</legend>
<div className="form-group">
<label htmlFor="selectcourse">SelectCourse:</label>
<select id="selectcourse"
value={selectcourse}
onChange={(e)=>setSelectcourse(e.target.value)}
required>
<option></option>
<option>PYTHON FULLSTACK</option>
<option>JAVA FULLSTACK</option>
<option>SOFTWARE TESTING</option>
<option>PYTHON DATA SCIENCE</option>
</select>
</div>
<div className="form-group1">
<label htmlFor="deliverymode">DeliveryMode:</label>
<input className="delivery" type="radio" value="Online"
checked={deliverymode === "Online"} onChange={handleOption}/><label>Online</label>
<input className="delivery" type="radio" value="Offline"
checked={deliverymode === "Offline"} onChange={handleOption}/> <label>Offline</label>
</div>
<div className="form-group">
<label htmlFor="comments">Comments:</label>
<textarea id="comments"
value={comments}
onChange={(e)=> setComments(e.target.value)}
required>
</textarea>
</div>
</fieldset>
<br></br>
{passwordError && <p className="warning">Password do not match.</p>}
{mobileNumberError && <p className="warning">mobile number do not match.</p>}
{firstnameError && ( <p className="warning">Please enter your Firstname.</p>)}
{lastnameError && (<p className="warning">Please enter your Lastname.</p> )}
{emailError && (<p className="warning">Please enter a valid email address.</p>)}
<button type="submit">Register</button>
</form>
</>
);
}
export default RegistrationForm;