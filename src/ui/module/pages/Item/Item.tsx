import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router-dom';

import { getItemById } from '../../../../apliaccion/services/itemsService';
import { ItemResponse } from '../../../../utils/interfaces/ItemsResponse';


import { ItemDetailCard, Loader } from '../../../components';

import useSEOHook from '../../../../utils/hooks/useSEOHook';



export default function ItemPage() {
    const params = useParams()

    const id = params.id || ''
    
    const { data, isError, error, isLoading }: UseQueryResult<ItemResponse, Error> =  useQuery<ItemResponse, Error, ItemResponse>(["item", id], () => getItemById(id));

    const title = data ? `${data.item.title} | Mercado Libre 📦` : 'Cargando... | Mercado Libre 📦'
    const description = data ? `Envios gratis en el dia. ${data.item.title} en Mercado Libre. Tenemos miles de productos a precios increibles. Comprá ahora!` : "Mercado Libre"
    const ogImage = data?.item.picture

    useSEOHook({  
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogImage: ogImage
    })

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (isError) {
        return (
            <div>Error is: {error.message}</div>
        );
    }

    return (
        <main className='mt-5 px-2 mx-auto max-w-5xl'>
            {data ? (<ItemDetailCard item={data.item}></ItemDetailCard>) : (<div>No hay item</div>)}
        </main>
    )
}
