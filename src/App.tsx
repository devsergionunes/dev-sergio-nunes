import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { onChangeThemeAntd } from "./styles/ConfigTheme";

function App() {
  const currentTheme =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";

  return (
    <ConfigProvider
      componentSize="middle"
      locale={ptBR}
      // theme={onChangeThemeAntd(currentTheme)}
      theme={onChangeThemeAntd("DARK")}
    >
      <div>
        <GlobalStyle />
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
