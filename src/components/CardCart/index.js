import Button from "../Button";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

import { Container } from "./styles";
function CardCart({ product, isRemovable = false }) {
  const { id, img, name, priceFormatted } = product;
  const dispatch = useDispatch();

  return (
    <Container>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <section>
        <h2>{name}</h2>
      </section>
      <span>{priceFormatted}</span>
      <div>
        {isRemovable ? (
          <Button
            type="button"
            onClick={() => dispatch(removeFromCartThunk(id))}
          >
            <span>Remover do carrinho</span>
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => dispatch(addToCartThunk(product))}
          >
            <span>Adicionar ao carrinho</span>
          </Button>
        )}
      </div>
    </Container>
  );
}
export default CardCart;
