import { useState } from "react";

function GameTitle({ Name, path, setPath }) {
  // Remove "./" prefix from path, if it exists, to get the editable part of the path
  const editablePart = path.startsWith("./") ? path.slice(2) : path;

  // Local state to hold the temporary value of the path being edited
  const [tempPath, setTempPath] = useState(editablePart);

  // Local state to control whether the component is in edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle switching between edit mode and saving the path
  const edit = () => {
    if (editMode) {
      // When leaving edit mode, update the parent state with the new path
      setPath(`./${tempPath}`);
    }
    // Toggle edit mode
    setEditMode(!editMode);
  };

  return (
    <div className="mx-14 mt-4 flex justify-center py-4 text-3xl border rounded-xl mb-6">
      {/* Display the game title */}
      <span>{Name}</span>

      {/* Editable path field */}
      <span className="ml-2 text-sm flex items-end">
        {editMode ? (
          <div className="flex items-center">
            {/* Display the "./" prefix which remains static */}
            <span className="border-b-2 border-gray-400 px-1 ">./</span>
            {/* Input field for editing the path */}
            <input
              className="border-b-2 border-gray-400 focus:outline-none focus:bg-transparent"
              value={tempPath} // Bind the input value to tempPath state
              onChange={(e) => setTempPath(e.target.value)} // Update tempPath on change
              onBlur={edit} // Save the value and exit edit mode when input loses focus
              onKeyDown={(e) => {
                if (e.key === "Enter") edit(); // Save the value and exit edit mode when "Enter" is pressed
              }}
              autoFocus // Automatically focus the input when in edit mode
            />
            {/* Save/confirm button */}
            <svg
              className="cursor-pointer mx-1"
              onClick={edit} // Save the value and exit edit mode when clicked
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
          <>
            {/* Display the current path in view mode */}
            {path}
            {/* Edit button (pencil icon) */}
            <svg
              onClick={edit} // Enter edit mode when clicked
              className="cursor-pointer mx-1"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F19E39"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          </>
        )}
      </span>
    </div>
  );
}

export default GameTitle;
