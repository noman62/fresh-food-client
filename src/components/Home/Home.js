import React,{ useEffect } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import Pizza from '../Pizza/Pizza';
// import { getAllPizzas } from "";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from '../../redux/actions/pizzaAction';
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
          <h1>Loading ...</h1>
        ) : error ? (
          <h1>Error while fetching pizzas</h1>
        ) : (
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
        </>
    );
};

export default Home;