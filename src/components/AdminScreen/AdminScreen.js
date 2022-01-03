import React, { useEffect } from "react";
import { Row, Col, Container, ButtonGroup, Button } from "react-bootstrap";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AddNewPizza from "../Admin/AddNewPizza";
import OrderList from "../Admin/OrderList";
import PizzaList from "../Admin/PizzaList";
import UserList from "../Admin/UserList";
import EditPizza from "../Admin/EditPizza";
const AdminScreen = () => {
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;
useEffect(() => {
 if(localStorage.getItem("currentUser")===null || !currentUser.isAdmin){
   window.location.href="/";
 }
}, [])
  const history = useHistory();
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-1 mt-3">
            Admin Panel
          </h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All User
              </Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin/userlist" component={UserList} exact />
              <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact />
              <Route path="/admin/pizzalist" component={PizzaList} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
