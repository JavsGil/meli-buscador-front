import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import meliLogo from '../../../ui/module/assets/meliLogo.png';

export const Navbar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const onClickSubmitSearch = (event: any, searchValue: string) => {
        event.preventDefault();
        navigate("/items?search=" + searchValue)
    };

    return (
        <header className='w-full bg-primaryColor'>
            <div className='p-4 mx-auto max-w-5xl'>
                <div className='flex flex-wrap items-center'>
                    <Link to={`/`}>
                        <div className='block lg:hidden'>
                            <img className='mr-3' alt=''/>
                        </div>
                        <div className='hidden lg:block md:hidden'>
                            <img className='mr-3' alt='' src={ meliLogo }/>
                        </div>
                    </Link>

                    <div className='flex-1'>
                        <form className='flex flex-row'>
                            <input 
                                type="search" 
                                className="form-control relative fill-rule flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                placeholder="Buscar productos, marcas y más…" 
                                aria-label="Search" 
                                aria-describedby="button-addon2"
                                value={searchValue}
                                onChange={(e) => { setSearchValue(e.target.value) }}
                            />
                            <button 
                            type="submit" 
                            onClick={(event) => onClickSubmitSearch(event, searchValue)}
                            className="p-2 text-sm font-medium text-black bg-gray-200 ">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
