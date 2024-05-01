import GameCard from "./gameCard"
import ServerList from "./serversList";

export default function Home() {
  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {/*<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">*/}
          <div className="row">
            <GameCard image="minecraft1.jpg"></GameCard>
          </div>
        </div>
      </div>
      <h1 className="text-center">Your servers</h1>
      <ServerList></ServerList>
    </>
  );
}
