import Menu from "../Menu";
import HeaderInputHeader from "../HeaderImputGroup";
import { Header } from "./styled";
import Img from "../Imagens/Banner-Header.png";

function index() {
  return (
    <Header style={{backgroundImage: `url(${Img})`}}>
      <Menu />
      <HeaderInputHeader/>
    </Header>
  );
}

export default index;
