import React, { useEffect } from "react";
import { Col, NavItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../redux/actions/orderAction";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const OrderScreen = () => {
  const orderState = useSelector((state) =>state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  },[dispatch]);
  return (
    <div>
      <h1>Order screen</h1>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          <Row>
            <Col md={4}>
              {order.orderItems.map((item) => (
                <div>
                  <h5>
                    {item.name} [{item.varient}]*{item.quantity} = {item.price}
                  </h5>
                </div>
              ))}
            </Col>
            <Col md={4}>
                <h4>Address</h4>
                <h6>Street : {order.shippingAddress.Street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.picode}</h6>
                <h6>Country: {order.shippingAddress.country}</h6>
            </Col>
            <Col md={4}>
                <h4>Order Info</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transaction Id :{order.transactionId}</h6>
                <h6>Order Id :{order._id}</h6>
                
            </Col>
          </Row>
        ))}
      
    </div>
  );
};

export default OrderScreen;
