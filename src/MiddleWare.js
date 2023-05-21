import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersList } from './redux/usersSlice';

const MiddleWare = () => {

    const data = useSelector((state) => state.users);

    const dispatch = useDispatch();

        console.log(data)
        console.log(dispatch)

        useEffect(()=>{
            if(data.status === 'idle'){
                dispatch(fetchUsersList())
            }
        },[])

  return (

    <div>
        <h1>MiddleWare</h1>

        {
            data.users.status == 'idle' ? <h2>Loading.....</h2> : null
        }
        {
            data.users.length > 0 ? <div>
                {
                    data.users.map((item,index) => <p key={index}> welcome to {item.username} from {item.address.city}</p>)
                }
            </div> : null
        }
    </div>
  )
}

export default MiddleWare;