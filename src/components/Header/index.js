import Menu from "../Menu";
import HeaderInputHeader from "../HeaderImputGroup";
import { Header } from "./styled";

function index() {
  return (
    <Header>
      <Menu />
      <HeaderInputHeader/>
    </Header>
  );
}

export default index;
