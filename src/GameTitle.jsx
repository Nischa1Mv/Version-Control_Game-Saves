import { useState } from "react";

function GameTitle({ Name, path, setPath }) {
  const editablePart = path.startsWith("./") ? path.slice(2) : path; // Remove './' prefix

  const [tempPath, setTempPath] = useState(editablePart); // Temporary state for the editable part
  const [editMode, setEditMode] = useState(false); // State for edit mode

  const edit = () => {
    if (editMode) {
      setPath(`./${tempPath}`); // Update the path, keeping './' fixed
    }
    setEditMode(!editMode);
  };

  return (
    <div className="mx-14 mt-4 flex justify-center py-4 text-3xl border rounded-xl mb-6">
      <span>{Name}</span>
      <span className="ml-2 text-sm flex items-end">
        {editMode ? (
          <div className="flex items-center">
            {/* Display non-editable ./ */}
            <span className="border-b-2 border-gray-400 px-1 ">./</span>
            <input
              className="border-b-2 border-gray-400 focus:outline-none focus:bg-transparent"
              value={tempPath}
              onChange={(e) => setTempPath(e.target.value)} // Update only the editable part
              onBlur={edit} // Save and exit edit mode when losing focus
              onKeyDown={(e) => {
                if (e.key === "Enter") edit(); // Save on Enter
              }}
              autoFocus
            />
            <svg
              onClick={edit}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#75FBFD"
            >
              <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
            </svg>
          </div>
        ) : (
          <>{path}</> // Display the entire path when not in edit mode
        )}
        <svg
          onClick={edit}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#F19E39"
        >
          <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
        </svg>
      </span>
    </div>
  );
}

export default GameTitle;
