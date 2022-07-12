import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <>
      <Button title="Button" />
      <Card
        title='card'
        content={
          <>
            <div>1.이미지파일 넣기</div>
            <div>2.디자인변경</div>{' '}
          </>
        }
      />
    </>
  );
}

export default App;
