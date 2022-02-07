import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const preferenceData = [
    { preference: "Adventure" },
    { preference: "Parks" },
    { preference: "Vacation" },
    { preference: "Beaches" },
    { preference: "Tempels" },
    { preference: "Historical Places" },
    { preference: "Educational Visit" },
    { preference: "Towns/Villages" },
    { preference: "Cities" },
    { preference: "Small Trips" },
    { preference: "Cultural Visits" },
    { preference: "Others" }

];

const Preference = () => {

    const [preferences, setPreferences] = useState([]);

    useEffect(() => {
        setPreferences(preferenceData);
    }, []);

    const handleChange = (e) => {
        const { preference, checked } = e.target;
        let tempPreference = preferences.map((option) =>
            option.preference === preference ? { ...option, isChecked: checked } : option
        );
        setPreferences(tempPreference);
    };
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        console.log("sibmit button clicked");
        ev.preventDefault();

       

        const res = await fetch(
            "https://happy-visit-32e03-default-rtdb.firebaseio.com/userPreferences.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                setPreferences         
            })
        }
        );
        navigate('/');
    }

    const handleSkip = () => {
        navigate("/");
    }


    return (
        <>
            <h2>Preference Page</h2>
            <br />
            <form onSubmit={handleSubmit} method='POST'>
                <div className="container">
                    <div className="form">
                        <h3>Select your top 5 preferences</h3>
                        {preferences.map((option, index) => (
                            <div className="form-check" key={index}>
                                <input type="checkbox" className='form-check-input'
                                    name='option.preference'
                                    // value={preferences.name}
                                    checked={option?.isChecked}
                                    onChange={handleChange} />
                                <label className='form-check-label'>{option.preference}</label>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='button'>
                    <button className='btn btn-sm btn-success' type="submit">Continue</button>
                    <button onClick={handleSkip}>Skip</button>
                </div>
            </form>

        </>
    );
};

export default Preference;
