import { useEffect, useState } from "react";


const PetPage =()=> {
const [petData, setPetData] = useState([])
    useEffect(() => {
     const getAllPets = async() => {
        const response = await fetch('http://localhost:3000/api/v1/pets', {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = response.json();
        console.log(response);
        setPetData(result);
     }
     getAllPets();
    },[]);
    return (
        <>
            <h1>Pet Page</h1>
        
        </>
    )
}
export default PetPage;