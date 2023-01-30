import { Container, Content, BoxButtons } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const history = useHistory();
  const cart = useSelector(({ cart }) => cart);
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>Kenzie Shop</h1>
        <BoxButtons>
          <Button onClick={() => handleNavigation("/cart")}>
            {cart.length > 0 && <span>{cart.length} </span>}Carrinho
          </Button>
          <Button onClick={() => handleNavigation("/")}>Home</Button>
        </BoxButtons>
      </Content>
    </Container>
  );
}
export default Header;
