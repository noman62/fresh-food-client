import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../Pizza/Pizza";
import { getAllPizzas } from "../../redux/actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
const Home = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error/>
        ) : (
          <Row>
            {/* <Filter/> */}
            {pizzas.map((pizza,id) => (
              <Col md={4}>
                <Pizza pizza={pizza} key={id} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
