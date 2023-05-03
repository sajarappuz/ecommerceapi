import axios from "axios"; 



const ECO = "https://fakestoreapi.com"

 export const getAllProducts = async() =>{
 const response = await axios.get(`${ECO}/products`)
 return response.data;
}
 