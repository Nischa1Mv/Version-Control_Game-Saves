import { useState } from "react";

function GameFile({ Name, date, time }) {
  const [editMode, setEditMode] = useState(false); // Edit mode state
  const [tempName, setTempName] = useState(Name); // Temporary state for editing name

  const edit = () => {
    if (editMode) {
      // Save the updated name when exiting edit mode
      if (tempName !== Name) {
        console.log(`Updated name to: ${tempName}`);
        // Here you would typically update the name via a parent component's state or an API
      }
    }
    setEditMode(!editMode); // Toggle edit mode
  };

  return (
    <div className="flex border mx-6 h-[50px] justify-start items-center px-4 rounded-lg">
      <svg
        className="mr-4"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFF55"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
      </svg>

      {editMode ? (
        <>
          <input
            className="text-2xl mr-4 focus:outline-none focus:border-gray-200 focus:bg-transparent focus:border-b-2 "
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            autoFocus
            onBlur={edit}
            onKeyDown={(e) => {
              if (e.key === "Enter") edit();
            }}
          />
          <svg
            className="cursor-pointer"
            onClick={edit}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#75FBFD"
          >
            <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
          </svg>
        </>
      ) : (
        <>
          <p className="text-2xl mr-4">{tempName}</p>{" "}
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
        </>
      )}

      <div className="flex-1"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
      </svg>

      <p className="mx-4">{date}</p>
      <p className="mx-4"> {time}</p>
      {/* copy svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z" />
      </svg>
    </div>
  );
}

export default GameFile;
