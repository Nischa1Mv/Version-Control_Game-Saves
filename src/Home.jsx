import { useState } from "react";
import GameFile from "./gameFile";
import Games from "./Games";
import GameTitle from "./GameTitle";
import Search from "./search";
import { gamesname } from "./gamesname";
function Home() {
  const [selectedGame, setSelectedGame] = useState(gamesname[0].name);
  const [path, setPath] = useState(gamesname[0].path);
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-[30%] h-full flex border-r-2 flex-col " id="left">
          <div className="flex justify-center items-center h-[15%]">
            <Search />
          </div>
          <div className="flex  flex-col">
            {gamesname.map((game) => (
              <Games
                key={game}
                Name={game.name}
                setSelectedGame={setSelectedGame}
                path={game.path}
                setPath={setPath}
              />
            ))}
          </div>
        </div>
        <div className="w-full  py-2">
          <GameTitle Name={selectedGame} path={path} setPath={setPath} />
          <div className="flex flex-col ">
            <GameFile Name={"save - 1"} date={"01-10-25"} time={"01:00"} />
            <GameFile Name={"save - 2"} date={"01-10-25"} time={"01:00"} />
            <GameFile Name={"save - 3"} date={"01-10-25"} time={"01:00"} />
            <GameFile Name={"save - 4"} date={"01-10-25"} time={"01:00"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
