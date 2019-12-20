import React from 'react';
import {connect} from 'react-redux';
import {onAddedToCart} from '../../actions';

const Table = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, index) => {
        const {title, count, price} = item;

        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>{price * count}₽</td>
                <td className='d-flex justify-content-end'>
                    <button
                        className="btn btn-outline-primary mr-3"
                        onClick={() => onDecrease(index)}
                    >
                        -1
                    </button>
                    <button
                        className="btn btn-outline-primary mr-3"
                        onClick={() => onIncrease(index)}
                    >
                        +1
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => onDelete(index)}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div>
            <h3>Ваш заказ</h3>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Книга</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>
            <div className='d-flex justify-content-end pr-2' style={{fontSize: '24px', fontWeight: 'bold'}}>
                Итого: {total}₽
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => ({items: cartItems, total: orderTotal});

const TableWrapped = connect(mapStateToProps, onAddedToCart)(Table);

export {TableWrapped as Table};
