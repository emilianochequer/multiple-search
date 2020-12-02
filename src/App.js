import "./App.css";
import SearchBox from "./pages";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Header>
          <Title style={{color: '#FFFFFF'}}>Avantica Challenge</Title>
        </Header>
        <Content breakpoint="lg">
          <SearchBox />
        </Content>
      </Layout>
    </StoreProvider>
  );
}

export default App;
