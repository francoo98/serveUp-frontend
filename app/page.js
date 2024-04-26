import GameCard from "./gameCard"

export default function Home() {
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <GameCard image="minecraft.webp"></GameCard>
          <GameCard image="terraria.jpg"></GameCard>
          <GameCard image="cs.jpg"></GameCard>
        </div>
      </div>
    </div>
  );
}
