// import React, { useState, useEffect } from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { filterPizza } from "../../redux/actions/pizzaAction";
// const Filter = () => {
//   const [searchKey, setSearchKey] = useState("");
//   const [category, setCategory] = useState("all");
//   const dispatch = useDispatch();
//   return (
//     <div className="mt-5">
//       <Form>
//         <Form>
//           <Row>
//             <Col>
//               <Form.Control
//                 value={searchKey}
//                 onChange={(e) => setSearchKey(e.target.value)}
//                 className="pt-2 pb-2"
//                 placeholder="Search Pizza "
//               />
//             </Col>
//             <Col>
//               <Row>
//                 <Col>
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="pt-2 pb-2 ps-5 "
//                   >
//                     <option>All</option>
//                     <option>Veg</option>
//                     <option>NonVeg</option>
//                   </select>
//                 </Col>
//                 <Col>
//                   <Button onClick={()=>{dispatch(filterPizza(searchKey,category))}}>Search</Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Form>
//       </Form>
//     </div>
//   );
// };

// export default Filter;
