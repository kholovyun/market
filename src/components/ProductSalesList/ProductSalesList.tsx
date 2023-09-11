import { useDispatch } from "react-redux"
import { AppDispatch, AppState } from "../../store/store"
import { useEffect } from "react"
import { getProducts } from "../../store/products/products.slice";
import { useSelector } from "react-redux";
import { Product } from "../Product/Product";
import Countdown from 'react-countdown';
import styles from './ProductSalesList.module.css'
import uuid from 'react-uuid';

export const ProductSalesList : React.FunctionComponent= (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const {products} = useSelector((state: AppState) => {return state.products})
    const Completionist = () => <span>You are good to go!</span>;
  return (
    <>
    <div className={styles.sales_block}>
        <div className={styles.today_sales}>
            <h4 className={styles.today_sales_title}>Today's</h4>
            <h4 className={styles.today_sales_title_promo}>Flash Sales</h4>
        </div>
        <div className={styles.timer}>
        <Countdown date={Date.now() + 1000000000}>
            <Completionist />
        </Countdown>
        </div>
    </div>
    <div className={styles.product_list}>
        {Object.values(products)?.map((product) => {return ( 
            <Product
                key={uuid()}
                img={product.img}
                price={product.price}
                salesPrice={product.saleprice}
                name={product.name}
                product={product}
            />
        )})}
    </div>
    <button className={styles.all_products_btn}>View All Products</button>
    </>
  )
}
