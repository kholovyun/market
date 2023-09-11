import { useDispatch } from "react-redux"
import IProductProps from "./IProductProps"
import styles from './Product.module.css'
import { AppDispatch } from "../../store/store"
import { addToCart } from "../../store/users/users.slice"
import {useState} from 'react'
import uuid from 'react-uuid'
import { useNavigate } from "react-router-dom"

export const Product: React.FunctionComponent<IProductProps> = (props): React.ReactElement => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const [added,setAdded] = useState(false)
    const calculatePercentageDifference = (value1: number, value2: number) => {
        const percentageDifference = ((value2 - value1) / value1) * 100;
        return percentageDifference;
    }
    const addToCartFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(addToCart({id: uuid() ,quantity: 1 ,product :props.product}))
        setAdded(true)
    }
    const percent = calculatePercentageDifference(props.salesPrice ,props.price)
  return (
    <div onClick={() => navigate(`/product/${props.product.id}`)} className={styles.product_card}>
        <div className={styles.procent_sale}>
            <h4>SALE {percent.toFixed(0)} %</h4>
        </div>
        <img className={styles.product_img} src={props.img} alt="#"/>
        <h3>{props.name}</h3>
        <div className={styles.price_block}>
            <p style={{color: 'red'}}>{props.salesPrice} $</p>
            <p style={{textDecoration: "line-through"}}>{props.price} $</p>
        </div>
        {added?
            <button onClick={() => navigate('/cart')} className={styles.add_btn}>Go to Cart</button>
            :
            <button onClick={(e) => addToCartFunc(e)} className={styles.add_btn}>Add to cart</button>

        }
    </div>
  )
}
