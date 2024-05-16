import { Link } from 'react-router-dom';
import './style.css';

function List({ note, onDelete }) {
  return (
    <div className="note-container">
      <p className="note-title">{note.name}</p>
      <p className="note-content">Jersey No: {note.jersey_no}</p>
      <p className="note-content">Salary: {note.salary}</p>
      <p className="note-content">Country: {note.country_name}</p>
      <p className="note-content">Occupation: {note.occupation}</p>
      <p className="note-content">Gender: {note.gender}</p>
      <img
        className='note-content'
        width="450px"
        height="450px"
        src={note.profile_image}
        alt="Player Profile"
      />
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
      <Link to={`/player/${note.id}`} className="update-button">
        Update
      </Link>
    </div>
  );
}

export default List;
