import { environment } from "../Environment/environment";

export const CartService = async () => {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };

    const response = await fetch(environment.BaseUrl+"carts/5", requestOptions)
    const ListCart = await response.json()
    return ListCart

}