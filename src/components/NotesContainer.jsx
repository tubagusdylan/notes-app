/* eslint-disable react/prop-types */
import NotesCard from "./NotesCard";
import "../styles/notesContainer.css";

const NotesContainer = (props) => {
  const { notes, title, archived, onDeleteNotes, onArchivedNotes, onActivedNotes, statusCount, searchText } = props;
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="notes-wrap">
        {notes.length > 0 && statusCount > 0 ? (
          notes.map((note) => {
            return (
              archived === note.archived &&
              note.title.toLowerCase().includes(searchText.toLowerCase()) && <NotesCard key={note.id} {...note} propsArchived={archived} onDeleteNotes={onDeleteNotes} onArchivedNotes={onArchivedNotes} onActivedNotes={onActivedNotes} />
            );
          })
        ) : (
          <p>TIdak ada catatan</p>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
