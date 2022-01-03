import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table} from "react-bootstrap";
import { deleteUser, getAllUsers } from "../../redux/actions/userAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { AiFillDelete } from "react-icons/ai";
const UserList = () => {
    const userState=useSelector(state=>state.getAllUsersReducer)
    const {loading,error,users}=userState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>User list</h1>
      {loading && (<Loader/>)}
      {error && (<Error error="Error while fetching users"/>)}
      <Table striped busered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
             users && users.map(user=>(
                 <tr key={user._id}>
                     <td>{user._id}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>
                     <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteUser(user._id))
                        }}
                      />
                     </td>
                     

                 </tr>
             ))
         }
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
