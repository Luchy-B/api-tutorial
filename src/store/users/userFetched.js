import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './usersSlice';

const UserFetched = () => {
const {users, isloading, error} = useSelector((state) => state.user)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchData())
}, [dispatch])

if(isloading) {
  <p>Loading....</p>
}

if(error) {
  <p>{error.message}</p>
}

return (
    <div>
      {users.map((user)=>{
        <div className='container' key={user}>
          <h2>{user.first}</h2>
          <h2>{user.last}</h2>
        </div>
      })}
    </div>
  )
}

export default UserFetched