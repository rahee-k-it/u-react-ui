import Card from "../components/Card";

function CardPage() {
  return (
    <>
      <div>
        <Card
          title="card"
          content={
            <>
              <div>1.이미지파일 넣기</div>
              <div>2.디자인변경</div>
            </>
          }
        />
      </div>
    </>
  );
}

export default CardPage;
