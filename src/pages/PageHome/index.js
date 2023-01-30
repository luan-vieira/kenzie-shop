import React from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import products from "../../store/modules/products";

import formatValue from "../../utils/formatValue";
import { Container, List } from "./styles";

function PageHome() {
  const data = products.map((product) => ({
    ...product,
    priceFormatted: formatValue(product.price),
  }));

  return (
    <>
      <Header />
      <Container>
        <List>
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </List>
      </Container>
    </>
  );
}
export default PageHome;
