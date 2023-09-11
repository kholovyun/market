import {useState} from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import uuid from 'react-uuid';
import styles from  './Cart.module.css'
import { CartProduct } from './CartProduct';
import { useNavigate } from 'react-router-dom';
import ICartProduct from '../../interfaces/ICartProduct';

export const Cart = () => {
    const navigate = useNavigate()
    const [promo, setPromo] = useState<string>("")
    const [isFree, setIsFree] = useState<boolean>(false)
    const {cart} = useSelector((state: AppState) => {return state.users})
    //@ts-ignore
    let subtotal = cart?.reduce((sum: number, item: ICartProduct) => {
        return sum + item.quantity * (item.product.saleprice ? item.product.saleprice : item.product.price);
      }, 0);
    let shipping = isFree? "Free" :  `${(subtotal * 0.1).toFixed(2)}`
      const promoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {setPromo(e.target.value)}
    const applyCoupon = () => {
        if(promo === 'promo'){
            setIsFree(true)
        } else {
            (parseInt(subtotal) * 0.1).toFixed(2)
        }
    }
  return (
    <div>
        <table className={styles.cart_table}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.length > 1?
                    cart?.map((product) => {
                        return (
                            <CartProduct
                                key={uuid()}
                                product={product}
                            />
                        )
                    })
                    :
                    <h2>No roducts yet</h2>
                }
                
            </tbody>
        </table>
        <button onClick={() => navigate('/')} className={styles.back_to_shop_btn}>
                Back to shop
        </button>
        <div className={styles.checkout_container}>
            <div className={styles.coupon_block}>
                <input type="text" onChange={promoHandler}  className={styles.coupon_input}/>
                <button onClick={() => {applyCoupon()}} className={styles.coupon_btn}>Apply Coupon</button>
            </div>
            <div className={styles.pay_block}>
                <div className={styles.pay_text_block}>
                    <h4>Cart Total</h4>
                    <div>
                        <p>Subtotal : </p>
                        <p>$ {(subtotal).toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Shipping :</p>
                        <p> {shipping}</p>
                    </div>
                    <div>
                        <p>Total :</p>
                        <p>$ {isFree? subtotal.toFixed(2) :  (parseInt(subtotal) + parseInt(shipping)).toFixed(2)}</p>
                    </div>
                </div>
              <button>Procees to checkout</button>
            </div>
        </div>
    </div>
  )
}
