import Card from "../components/Card";

function CardPage() {
  return (
    <>
      <div>
        <Card
          bgImg="assets/image/cake.png"
          title="당근 케이크"
          content={<>맛있음. 우유랑 먹는거 추천</>}
        />
      </div>
    </>
  );
}

export default CardPage;
