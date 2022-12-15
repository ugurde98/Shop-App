import { environment } from "../Environment/environment";

export const Categories= async () => {
    var requestOptions:RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const response =await fetch(environment.BaseUrl+"products/categories", requestOptions)
    const ListCategories= await response.json()
    return  ListCategories
    

    
}