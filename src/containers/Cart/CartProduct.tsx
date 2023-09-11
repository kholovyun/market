import React, { useState } from 'react';
import ICartProductProps from './ICartProductProps';
import uuid from 'react-uuid';
import styles from './Cart.module.css';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { changeQantity, deleteFromCart } from '../../store/users/users.slice';

export const CartProduct: React.FunctionComponent<ICartProductProps> = (
  props
): React.ReactElement => {
  const dispatch: AppDispatch = useDispatch();
  const [quantityNum, setQuantityNum] = useState<number>(props.product?.quantity);

  const quantityNumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantityNum(newQuantity);
    dispatch(changeQantity({ id: props.product?.id, quantity: newQuantity })); // Передаем новое значение quantity
  };

  const deleteFromCartFunc = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(deleteFromCart(props.product.id))
  }
  const price = props.product?.product.saleprice? props.product?.product.saleprice : props.product?.product.price

  return (
    <tr key={uuid()}>
      <td>
        <div className={styles.product_cart_name}>
        <svg onClick={deleteFromCartFunc} className={styles.delete_btn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" fill="#DB4444"/>
            <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          <img className={styles.cart_img} src={props.product?.product.img} alt="#" />
          <p>{props.product?.product.name}</p>
        </div>
      </td>
      <td>$ {price}</td>
      <td>
        <input
          className={styles.quan_input}
          type="number"
          onChange={(e) => quantityNumHandler(e)}
          value={quantityNum}
        />
      </td>
      <td>${(price * quantityNum).toFixed(2)}</td>
    </tr>
  );
};
