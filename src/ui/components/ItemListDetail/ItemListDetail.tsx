import { Link } from 'react-router-dom';
import { Item } from '../../../utils/interfaces/Item';

import { useTranslation } from 'react-i18next';

type Props = {
    item: Item;
};
export const ItemListDetail = ({ item }: Props) => {
    const { t } = useTranslation();

    return (
        <Link to={`/item/${item.id}`}>
            <article
            className='flex flex-col md:flex-row p-4 bg-white border-b-2 border-gray-200'>
                <div className='flex justify-center'>
                    <img className='border border-gray-200 object-contain' decoding="async" 
                        src={item.picture} 
                        alt={item.title}
                        width="180" 
                        height="180"
                    />
                </div>

                <div className='flex-1 p-4'>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <h2 className='first-line:text-lg'>
                            <span style={{
                                textDecoration: 'underline'
                            }}>
                                { item.title }
                            </span>
                        </h2>
                        <div className='text-[12px] text-gray-500'>
                            <span className='capitalize'>{t(item.condition)}</span>
                        </div>
                    </div>  

                    <div className='flex flex-row justify-between items-center mt-8'>
                        <div className='text-2xl leading-none'>
                            {t(item.price.currency)} { item.price.amount }
                        </div>
                        {
                            item.free_shipping && (
                                <div className='text-2xl leading-none justify-center'>
                                <span className='text-sm text-green-600'>Envio gratis</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </article>
        </Link>
    );
}
