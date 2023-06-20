import { useQuery, UseQueryResult } from "react-query";
import { useLocation } from "react-router-dom";

import { MainMenu, ItemList, Loader, NoItemsFound } from '../../../components'


import useSEOHook from '../../../../utils/hooks/useSEOHook';
import meliLogo from '../../../../ui/module/assets/meliLogo.png';

import { getItemsById } from "../../../../apliaccion/services/itemsService";
import { ItemsResponse } from "../../../../utils/interfaces/ItemsResponse";


export default function ItemsPage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const searchValue = query.get("search") || "";

    const {
        data,
        isError,
        error,
        isLoading,
    }: UseQueryResult<ItemsResponse, Error> = useQuery<
        ItemsResponse,
        Error,
        ItemsResponse
    >(["item", searchValue], () => getItemsById(searchValue));

    const title = `${ searchValue } | MercadoLibre 📦`
    const description = `Encontrá ${searchValue} que buscas en Mercado Libre. Tenemos miles de productos a precios increíbles. ¡Comprá ahora!`
    const ogImage = meliLogo

    useSEOHook({  
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogImage: ogImage
    })

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Error is: {error.message}</div>;
    }

    return (
        <main className="mt-5 px-2 mx-auto max-w-5xl">
            {data && data.categories?.length > 0 && (
                <MainMenu categories={data?.categories} />
            )}

            {data && data.items?.length > 0 ? (
                <ItemList items={data?.items} />
            ) : (
                <NoItemsFound />
            )}
        </main>
    );
}
