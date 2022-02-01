import React from 'react';

const Profile = () => {

  const submitClicked = (e) => {
    e.preventDefault();
    alert("Profile Updated Sucessfully!!!");
  } 
  return (
    <>
    <center>
      <form onSubmit={submitClicked} method='POST' className="profilePage">
      <div className="editProfile">
        <h4>Name: </h4>
        <input type="text"  id="userName" placeholder='Enter your name' autoComplete='off'
        autoCapitalize='off' autoCorrect='off'/>
      </div>

      <div className="editProfile">
        <h4>Date Of Birth: </h4>
        <input type="date" id="userDOB" />
      </div>

      <div className="editProfile">
        <h4>Gender: </h4>
        Male
        <input type="radio" name="gender" value={"Male"} id='genderMale' />
        Female
        <input type={"radio"} name='gender' value={"Female"} id='genderFemale' />
        Transgender
        <input type={"radio"} name='gender' value={"Transgender"} id='genderTransgender' />
        Others
        <input type={"radio"} name='gender' value={"Others"} id='genderOthers' />
      </div>

      <div className="editProfile">
        <h4>City: </h4>
        <input type="text"  id="userCity" placeholder='Enter your city' className='userLocation' 
        autoComplete='off' autoCapitalize='on' />
      </div>

      <div className="editProfile">
        <h4>Country: </h4>
        <input type="text"  id="userName" placeholder='Enter your country' className='userLocation' 
        autoCapitalize='on' autoComplete='off'/>
      </div>

      <button type="submit">Submit</button>
      </form>
    </center>
    </>
  )
};

export default Profile;
