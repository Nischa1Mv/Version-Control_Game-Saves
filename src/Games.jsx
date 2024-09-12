function Games({ Name, setSelectedGame }) {
  return (
    <>
      <div
        className="w-full flex justify-center items-center px-2 py-4 border-t-1 border-b-1 border-r-0 border border-l-0 cursor-pointer"
        onClick={() => setSelectedGame(Name)}
      >
        <div>{Name}</div>
      </div>
    </>
  );
}

export default Games;
