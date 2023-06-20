import './MainMenu.scss';

type Props = {
    categories: Array<string>;
};

export const MainMenu = ({ categories }: Props) => {
    return (
        <ol className='meli-breadcrumb' itemType="http://schema.org/BreadcrumbList">
            {categories?.map((categoryName: any, key: any) => (
                <li className='meli-breadcrumb-item' key={key} itemType="http://schema.org/ListItem"> 
                    <a href='/' onClick={ e => e.preventDefault() } >
                        { categoryName }
                    </a>
                </li>
            ))}
        </ol>
    );
}
