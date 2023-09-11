import { useDispatch } from "react-redux"
import { AppDispatch, AppState } from "../../store/store"
import { useEffect } from "react"
import { getBestSellers } from "../../store/products/products.slice";
import { useSelector } from "react-redux";
import styles from '../ProductSalesList/ProductSalesList.module.css'
import { BestSellerCard } from "../BestSellerCard/BestSellerCard";
import uuid from 'react-uuid';

export const BestSellersList : React.FunctionComponent= (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getBestSellers())
    }, [dispatch])

    const {bestSellers} = useSelector((state: AppState) => {return state.products})
    console.log(bestSellers)
  return (
    <>
    <div className={styles.sales_block}>
        <div className={styles.today_sales}>
            <h4 className={styles.today_sales_title}>This Mounth</h4>
            <h4 className={styles.today_sales_title_promo}>Best Selling Products</h4>
        </div>
    </div>
    <div className={styles.product_list}>
        {Object.values(bestSellers)?.map((product) => {return ( 
            <BestSellerCard
                key={uuid()}
                img={product.img}
                price={product.price}
                rating={product.rating}
                name={product.name}
                product={product}
            />
        )})}
    </div>
    <button className={styles.all_products_btn}>View All Popular Products</button>
    </>
  )
}
