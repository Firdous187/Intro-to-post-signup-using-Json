import React, { useRef } from 'react';

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileNumberInputRef = useRef();
    let profilePicInputRef = useRef();

    let onSignupJSON = async () => {

        let myHeader = new Headers();
        myHeader.append("content-type", "application/json");

        let dataToSend = {
            firstName: firstNameInputRef.current.value,
            lastName: lastNameInputRef.current.value,
            age: ageInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
           // mobileNo: mobileNumberInputRef.current.value,
           mobileNumber: mobileNumberInputRef.current.value,
            profilePic: profilePicInputRef.current.value,
        }

        let reqOptions = {
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(dataToSend),
        };

        let JSONData = await fetch("http://localhost:6789/signup", reqOptions);

        let JSOData = await JSONData.json();

        console.log(JSOData);
        alert(JSOData.msg);
    };

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input ref={firstNameInputRef}></input>
                </div>

                <div>;

                    <label>Last Name</label>
                    <input ref={lastNameInputRef}></input>
                </div>

                <div>
                    <label>Age</label>
                    <input ref={ageInputRef}></input>
                </div>

                <div>
                    <label>Email</label>
                    <input ref={emailInputRef}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input ref={passwordInputRef}></input>
                </div>

                <div>
                    <label>Mobile number</label>
                    <input ref={mobileNumberInputRef}></input>
                </div>

                <div>
                    <label >Profile Pic</label>
                    <input type="file" ref={profilePicInputRef}></input>
                </div>

                <div>
                    <button  onClick={() =>{
                        onSignupJSON();
                    }} type="button">Signup(JSON)</button>
                </div>
            </form>
        </div>
    )
}

export default Signup