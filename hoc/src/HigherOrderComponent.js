import React, {useState, useEffect} from 'react';

const HigherOrderComponents = (title, Components, request)=>{
    return function HOC(){
        const [data, setData] = useState([]);

        const getData = async()=>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
            .then((response)=>{
                return response;
            })
            .catch((error)=>{
                console.log(error);
            })
            setData(await data.json());
        };
        useEffect(()=>{
            getData();
        }, []);
        return (
            <div>
                <h2>{title}</h2>
                <Components data={data} />
            </div>
        )
    }
}
export default HigherOrderComponents;