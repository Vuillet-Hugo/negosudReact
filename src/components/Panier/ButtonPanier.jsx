import React from 'react';
import {Link} from 'react-router-dom';

const ButtonPanier = () => {
    return (
        <Link to='/PageCarte'>
            <button className='bg-transparent hover:bg-pink-800 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-800 hover:border-transparent rounded' >
               Valider le panier 
            </button>
        </Link>
    )
}
export default ButtonPanier;