import {
    ItemResponse,
    ItemsResponse,
} from "../../utils/interfaces/ItemsResponse";
import api from "../api/serviceApi";


export const getItemById = async (id: string): Promise<ItemResponse> => {
    const { data } = await api.get("/items/" + id);

    return data;
};

export const getItemsById = async (query: string): Promise<ItemsResponse> => {
    const { data } = await api.get("/items?q=" + query);

    return data;
};
