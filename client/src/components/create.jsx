import { useState,useEffect } from 'react';
import api from '../api';
import List from './list';


export default function Create() {
    const [player, setPlayer] = useState([]);
    const [name, setName] = useState("");
    const [jersey_no, setJerseyNo] = useState("");
    const [salary, setSalary] = useState("");
    const [country_name, setCountryName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [gender, setGender] = useState("");
    const [profile_image, setProfileImage] = useState(null);

    const createDetail = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("jersey_no", jersey_no);
        formData.append("salary", salary);
        formData.append("country_name", country_name);
        formData.append("occupation", occupation);
        formData.append("gender", gender);
        formData.append("profile_image", profile_image);
       
   
        try {
            const res = await api.post("http://127.0.0.1:8000/api/create/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(formData)
            if (res.status === 201) {
                alert("Player details created!");
            } else {
                alert("Failed to create player details.");
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    };
    useEffect(() => {
        getPlayer();
    }, []); 

    const getPlayer = () => {
        api
            .get("http://127.0.0.1:8000/api/list/")
            .then((res) => res.data)
            .then((data) => {
                setPlayer(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
    const deletePlayer = (id) => {
        api
            .delete(`http://127.0.0.1:8000/api/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) 
                    alert("Note deleted!");
                else 
                alert("Failed to delete note.");
                getPlayer();
            })
            .catch((error) => alert(error));
    
        }
    return (
        <>
            {player.map((note) => (
                    <List note={note} onDelete={deletePlayer} key={note.id} />
                ))}
            <h1>Enter the details of the player</h1>
            <form onSubmit={createDetail}>
                <label htmlFor="name">Name of the Player :</label> <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /> <br />

                <label htmlFor="jersey_no">Jersey No of the Player :</label> <br />
                <input
                    type="number"
                    id="jersey_no"
                    name="jersey_no"
                    value={jersey_no}
                    onChange={(e) => setJerseyNo(e.target.value)}
                    required
                /> <br />

                <label htmlFor="salary">Salary of the Player :</label> <br />
                <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                /> <br />

                <label htmlFor="country_name">Country Name of the Player :</label> <br />
                <input
                    type="text"
                    id="country_name"
                    name="country_name"
                    value={country_name}
                    onChange={(e) => setCountryName(e.target.value)}
                    required
                /> <br />

                <label htmlFor="occupation">Occupation of the Player :</label> <br />
                <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                /> <br />

                <label>Gender of the Player:</label> <br />
                <input
                    type="radio"
                    id="gender_male"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label htmlFor="gender_male">Male</label>
                <input
                    type="radio"
                    id="gender_female"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label htmlFor="gender_female">Female</label>
                <input
                    type="radio"
                    id="gender_other"
                    name="gender"
                    value="other"
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <label htmlFor="gender_other">Other</label> <br />

                <label htmlFor="profile_image">Profile Image:</label> <br />
                <input
                    type="file"
                    id="profile_image"
                    name="profile_image"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    required
                /> <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
    }
