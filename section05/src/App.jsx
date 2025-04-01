import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const buttonProps = {
    text: '블로그',
    color: 'tomato',
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button text={'메일'} />
      <Button text={'카페'} />
      <Button {...buttonProps} />
      <Button>
        <span>자식자식</span>
      </Button>
    </>
  );
}

export default App;

// jsx 주의사항
// 1. 중괄호 내부에는 표현식 : 값으로 평가
// 2. 숫자, 문자열, 배열 값만 렌더링 => null, undefined,true,false 렌더링 X
