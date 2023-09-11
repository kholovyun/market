import IBestSellerProps from './BestSellerCardProps';
import styles from '../Product/Product.module.css'
import StarRating from '../RatingRender/RatingRendet';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../store/users/users.slice';
import uuid from 'react-uuid'

export const BestSellerCard: React.FunctionComponent<IBestSellerProps> = (props): React.ReactElement => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch();
  const [added,setAdded] = useState(false)

  const addToCartFunc = () => {
    dispatch(addToCart({id: uuid() ,quantity: 1 ,product :props.product}))
    setAdded(true)
}
  return (
    <div className={styles.product_card}>
        <div className={styles.rating}>
            <StarRating rating={props.rating}/>
        </div>
        <img className={styles.product_img} src={props.img} alt="#"/>
        <h3>{props.name}</h3>
        <div className={styles.price_block}>
            <p>{props.price} $</p>
        </div>
        {added?
            <button onClick={() => navigate('/cart')} className={styles.add_btn}>Go to Cart</button>
            :
            <button onClick={() => addToCartFunc()} className={styles.add_btn}>Add to cart</button>

        }
    </div>
  )
}
