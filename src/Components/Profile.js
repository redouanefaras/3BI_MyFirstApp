import React from 'react'
import '../style.css'
const Profile = (props) => {
    const {fullName, 
        bio, 
        children, 
        handleName, 
        profession} =props;
     return (
        <div>
            <h1 className="titre">{fullName}</h1>
            <p> {bio} I'm a {profession}
            </p>
                {children}
                <br />
                <button onClick={()=>handleName(fullName)}>
                    Click Me
                </button>
                
        </div>
    )
}
 export default Profile;