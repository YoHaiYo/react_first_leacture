// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
       <p>이미지 소스 넣기 </p> 
      <img src='/logo512.png'></img>
      <p>소스호출하기 (public은 루트디렉토리로 / 하면 됨.)</p>
      <p>src 안에 넣은 소스는 node의 컴파일과정을 거치므로</p>
    </>
  );
}

export default App;
