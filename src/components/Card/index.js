import Button from "../Button";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

import { Container } from "./styles";
function Card({ product, isRemovable = false }) {
  const { id, img, name, description, priceFormatted } = product;
  const dispatch = useDispatch();

  return (
    <Container>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{priceFormatted}</p>
      {isRemovable ? (
        <Button type="button" onClick={() => dispatch(removeFromCartThunk(id))}>
          <span>Adicionar ao carrinho</span>
        </Button>
      ) : (
        <Button type="button" onClick={() => dispatch(addToCartThunk(product))}>
          <span>Adicionar ao carrinho</span>
        </Button>
      )}
    </Container>
  );
}
export default Card;
