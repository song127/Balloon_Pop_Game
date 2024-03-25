import Home from "@pages/Home";
import GlobalStyle from "@styles/globalStyle";

function App() {
  return (
    // 원페이지라 Browser Router 미사용
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
