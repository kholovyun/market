import React, {useEffect, useState} from 'react'
import styles from './ProductPage.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import IProduct from '../../interfaces/IProduct'
import delIcon from '../../../public/icon-delivery.svg'
import RefundIcon from '../../../public/Icon-return.svg'

export const ProductPage: React.FunctionComponent = () => {
    const params = useParams()
    const [product, setProduct] = useState<IProduct>()
    const [size, setSize] = useState<string>('')
    const [quan, setQuan] = useState<number>(1)
    const {products, bestSellers} = useSelector((state: AppState) => {
        return state.products
    })
    const setterSize = (size: string) => {
        setSize(size)
    }
    const quanHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuan(parseInt (e.target.value))
    }
    useEffect(() => {
        const id = params.id
        if (products) {
            const foundProduct = Object.values(products).find(
              (product) => product.id == id
            )
            console.log(foundProduct)
            setProduct(foundProduct)
            if(!foundProduct){
                const myProduct = bestSellers.find((product) => product.id == id)
                setProduct(myProduct)
            }
        }
    }, [])
  return (
    <div className={styles.product_page_con}>
        <div className={styles.product_page_info}>
            <div style={{backgroundImage: `url(${product?.img})`}} className={styles.product_page_img}></div>
            <div className={styles.product_page_main_info}>
                <h2>{product?.name}</h2>
                <p>$ {product?.price}</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid beatae dignissimos vel natus, minima voluptatibus aperiam, cum animi labore autem officiis commodi recusandae delectus
                    mollitia doloribus! Architecto odit necessitatibus et!
                </p>
                <div className={styles.size_btns}>
                    <p>Size :</p>
                    <button style={size === "S"? {border: "2px solid red",background: "var(--secondary-2, #DB4444)", color: 'white'} : {border: "1px solid black"}} onClick={() => {setterSize("S")}}  className={styles.size_btn}>S</button>
                    <button style={size === "M"? {border: "2px solid red", background: "var(--secondary-2, #DB4444)", color: 'white'} : {border: "1px solid black"}} onClick={() => {setterSize("M")}}  className={styles.size_btn}>M</button>
                    <button style={size === "XS"? {border: "2px solid red",background: "var(--secondary-2, #DB4444)", color: 'white'} : {border: "1px solid black"}} onClick={() => {setterSize("XS")}}  className={styles.size_btn}>XS</button>
                    <button style={size === "L"? {border: "2px solid red", background: "var(--secondary-2, #DB4444)", color: 'white'} : {border: "1px solid black"}} onClick={() => {setterSize("L")}}  className={styles.size_btn}>L</button> 
                    <button style={size === "XL"? {border: "2px solid red", background: "var(--secondary-2, #DB4444)", color: 'white'} : {border: "1px solid black"}} onClick={() => {setterSize("XL")}}  className={styles.size_btn}>XL</button>
                </div>
                <div className={styles.quan_set_block}>
                    <label>
                        <button className={styles.quan_controlls} onClick={() => setQuan(quan - 1)}>-</button>
                        <input className={styles.quan_input} onChange={quanHandler} type="number" value={quan}/>
                        <button className={styles.quan_controlls} onClick={() => setQuan(quan + 1)}>+</button> 
                    </label>
                    <button>Add to Cart</button>
                </div>
                <div className={styles.delivery_info_block}>
                    <div>
                        <div style={{backgroundImage: `url(${delIcon})`}} className={styles.img_icon}></div>
                        <div className={styles.del_text}>
                            <p>Free Delivery</p>
                            <p className={styles.sub_text}>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div>
                        <div style={{backgroundImage: `url(${RefundIcon})`}} className={styles.img_icon}></div>
                        <div className={styles.del_text}>
                            <p>Return Delivery</p>
                            <p className={styles.sub_text}>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}