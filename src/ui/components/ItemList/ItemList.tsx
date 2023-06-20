import { Item } from '../../../utils/interfaces/Item';
import { ItemListDetail } from '../../components';

type Props = {
    items: Item[];
};
export const ItemList = ({ items }: Props) => {
    return (
        <section className='pt-4 bg-white border rounded'>
            <div className='flex flex-col flex-wrap'>
                {items?.map((item, key) => (
                    <ItemListDetail key={key} item={item} />
                ))}
            </div>
        </section>
    )
}
