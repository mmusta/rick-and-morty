import { Space } from "antd";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import "./styles.css";
import Pager from "./components/Pager";

export default function App() {
  return (
    <div className="App">
      <Space align="center" direction="vertical" size="large">
        <Header />
        <Pager />
        <CharacterList />
      </Space>
    </div>
  );
}
