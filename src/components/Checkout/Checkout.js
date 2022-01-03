import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/actions/orderAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Success from "../Success/Success";
const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
    {loading && (<Loader/>)}
    {error && (<Error error="something went wrong"/>)}
    {success && (<Success success="order placed success"/>)}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51IeAyzIv2ejY4IHnJkH4axnsp7m61KknEAYI2HSD9GzXwonsx57m8BHoniytLMDHIsLHtNdP6Dxc28mmF6A4MEmS00eQ14U1VX"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
