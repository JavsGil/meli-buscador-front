import { useTranslation } from 'react-i18next';
import { Item } from '../../../utils/interfaces/Item';

type Props = {
    item: Item;
};

export const ItemDetailCard = ({ item } : Props) => {
    const { t } = useTranslation();

    return (
        <section className='p-4 bg-white'>
            <article className='lg:px-4'>

                <div className='flex flex-col md:flex-row'>   
                    <div className='w-full max-w-lg'>
                        <img className='w-full h-auto object-contain' decoding="async" 
                        src={ item.picture } 
                        alt={ item.title }/>
                    </div>

                    <div className='flex flex-col flex-1 justify-center p-5'>
                        <div className=''>
                            <span className='capitalize'>{t(item.condition)}</span> - { item.sold_quantity } vendidos
                        </div>

                        <div className='mt-2'></div>

                        <h2 className='text-2xl leading-none'>
                            { item.title }
                        </h2>

                        <div className='mt-4'></div>

                        <div className='text-2xl leading-none'>
                            {t(item.price.currency)} { item.price.amount }
                        </div>

                        <div className='mt-4'></div>

                        <button className='w-full p-2 text-white bg-blue-500 hover:bg-blue-400 border rounded-xl transition-all duration-100'>Comprar</button>
                        
                        <div className='mt-4'></div>

                        <span className='text text-green-600'>Envio gratis</span>

                        <div className='mt-4'></div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl'>Descripción del producto</h1>

                    {item.description &&
                        <div dangerouslySetInnerHTML={{ __html: item.description }}/>
                    }
                </div>
            </article>
        </section>
    );
}

