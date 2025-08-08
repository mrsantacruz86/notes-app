const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No notes yet</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rouded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="tex-sm text-gray-600">
            <strong>Category:</strong>
            {note.category}
          </p>
          <p className="tex-sm text-gray-600">
            <strong>Priority:</strong>
            {note.priority}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
