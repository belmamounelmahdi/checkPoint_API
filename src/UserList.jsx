import { useEffect, useState } from "react";
import axios from "axios";


const UserList = () => {
    const [ listOfUser, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
       // handle success
        setData(response.data)
            setLoading(false)
        })
        .catch(function (error) {
       // handle error
        console.log(error);
        })
    }, [])
        console.log(listOfUser)
        if(loading==false){
    return ( 
        <>
        <ul>
            {listOfUser.map((list) => 
                <li>
                    {list.name}
                </li>
            )}
        </ul>
        </>
    );
            }
}

export default UserList;