import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center pl-4 pr-4'>
            <div className="links d-flex align-items-center">
                <Link to='/' style={{fontSize: '36px', fontWeight: 'bold', marginRight: '40px'}}>ReStore</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            <div className="info">
                <button className="btn btn-link">
                    <span style={{fontSize: '14px'}}>5 шт.</span>
                    <span style={{fontSize: '24px'}}> (1 000₽)</span>
                </button>
            </div>
        </div>
    );
};
