import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import CardCart from "../../components/CardCart";
import {
  BoxButtons,
  Container,
  ContainerProdutos,
  ContainerResumo,
  Content,
  Header,
} from "./styles";

function PageCart() {
  const cart = useSelector(({ cart }) => cart);

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const soma = cart.reduce((previus, current) => previus + current.price, 0);

  return (
    <>
      <Header>
        <Content>
          <h1>Kenzie Shop - carrinho</h1>
          <BoxButtons>
            <Button onClick={() => handleNavigation("/")}>Home</Button>
          </BoxButtons>
        </Content>
      </Header>

      <Container>
        <ContainerProdutos>
          {cart.map((product) => (
            <CardCart key={product.id} product={product} isRemovable />
          ))}
        </ContainerProdutos>
        {cart.length > 0 ? (
          <ContainerResumo>
            <h3>Resumo do Pedido</h3>
            <div>
              <span>{cart.length} produtos</span>
              <span>R$ {soma},00</span>
            </div>
            <Button>Finalizar o pedido</Button>
          </ContainerResumo>
        ) : (
          <ContainerResumo>
            <p>Carrinho Vazio</p>
          </ContainerResumo>
        )}
      </Container>
    </>
  );
}
export default PageCart;
