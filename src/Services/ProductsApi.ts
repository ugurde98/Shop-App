import { environment } from "../Environment/environment";

export const Products=async () => {
    var requestOptions:RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const response =await fetch(environment.BaseUrl+"products", requestOptions)
    const ListProducts= await response.json()
    return  ListProducts
    
}
export const Product=async ({item}:any) => {
    var requestOptions:RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const response =await fetch(environment.BaseUrl+"products/"+item, requestOptions)
    const ListProducts= await response.json()
    return  ListProducts
    
}