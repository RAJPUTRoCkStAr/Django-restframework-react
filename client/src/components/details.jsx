import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [player, setPlayer] = useState({});
  const [name, setName] = useState("");
  const [jerseyNo, setJerseyNo] = useState("");
  const [salary, setSalary] = useState("");
  const [countryName, setCountryName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer = async () => {
    try {
      const result = await api.get(`http://127.0.0.1:8000/api/update/${id}`);
      const playerData = result.data;
      setPlayer(playerData);
      setName(playerData.name);
      setJerseyNo(playerData.jersey_no);
      setSalary(playerData.salary);
      setCountryName(playerData.country_name);
      setOccupation(playerData.occupation);
      setGender(playerData.gender);
      setProfileImage(playerData.profile_image); // Correct this line
    } catch (err) {
      console.error("Error loading player data:", err);
    }
  };

  const updatePlayer = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("jersey_no", jerseyNo);
    formData.append("salary", salary);
    formData.append("country_name", countryName);
    formData.append("occupation", occupation);
    formData.append("gender", gender);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const res = await api.put(`http://127.0.0.1:8000/api/update/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.status === 200) {
        alert("Player details updated!");
        navigate("/"); // Redirect on successful update
      } else {
        alert("Failed to update player details.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <h1>Update Player Details</h1>
      <form onSubmit={updatePlayer}>
        <label htmlFor="name">Name of the Player:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />

        <label htmlFor="jersey_no">Jersey No of the Player:</label><br />
        <input
          type="number"
          id="jersey_no"
          name="jersey_no"
          value={jerseyNo}
          onChange={(e) => setJerseyNo(e.target.value)}
          required
        /><br />

        <label htmlFor="salary">Salary of the Player:</label><br />
        <input
          type="number"
          id="salary"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        /><br />

        <label htmlFor="country_name">Country Name of the Player:</label><br />
        <input
          type="text"
          id="country_name"
          name="country_name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          required
        /><br />

        <label htmlFor="occupation">Occupation of the Player:</label><br />
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        /><br />

        <label>Gender of the Player:</label><br />
        <input
          type="radio"
          id="gender_male"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male"}
          required
        />
        <label htmlFor="gender_male">Male</label>
        <input
          type="radio"
          id="gender_female"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female"}
          required
        />
        <label htmlFor="gender_female">Female</label>
        <input
          type="radio"
          id="gender_other"
          name="gender"
          value="other"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "other"}
          required
        />
        <label htmlFor="gender_other">Other</label><br />

        <label htmlFor="profile_image">Profile Image:</label><br />
        <input
          type="file"
          id="profile_image"
          name="profile_image"
          onChange={(e) => setProfileImage(e.target.files[0])}
        /><br />
        <button type="submit">Update Player</button>
      </form>
    </>
  );
}
