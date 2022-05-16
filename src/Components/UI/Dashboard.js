import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth-slice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const logoutSubmitHandler = (event) =>{
    //    event.preventDefault(); 
    }  
    const logoutHandler = () => {
        dispatch(authActions.isNotAutheticatedUser());       
    }
  return (
    <>
    <div>Dashboard</div>
    {/* <form action="" onSubmit={logoutSubmitHandler}> */}
        <button onClick={logoutHandler}>Logout</button>
    {/* </form> */}
    </>
  )
}

export default Dashboard