import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import styles from './HomePage.module.css'
import { useSelector } from 'react-redux';
import {useEffect} from 'react'
import { getCategories } from '../../store/categories/categories.slice';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSalesList } from '../../components/ProductSalesList/ProductSalesList';
import { BestSellersList } from '../../components/BestSellersListList/BestSellersList';
import uuid from 'react-uuid';

export const HomePage: React.FunctionComponent = (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    const {categories} = useSelector((state: AppState) =>{return state.categories} )
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };

  return (
    <>
    <div className={styles.home_page_container}>
        <div className={styles.category_block}>
            {Object.values(categories)?.map((category) => {return (<div key={uuid()} className={styles.category_list_item}>
                {category.name}
            </div>)})}
        </div>
        <div className={styles.main_promo_screen}>
            <div className={styles.slider_box}>
                <Slider {...settings}>
                    <div className={styles.slide_one}>
                    </div>
                    <div className={styles.slide_two}>
                    </div>
                    <div className={styles.slide_three}>
                    </div>
                    <div className={styles.slide_four}>
                    </div>
                    <div className={styles.slide_five}>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
        <ProductSalesList/>
        <BestSellersList/>
    <div className={styles.new_arrival}>
        <div className={styles.left_big}>
            <div className={styles.left_big_text}>
                <h3 style={{color: "var(--text, #FAFAFA)",fontFamily: "Inter",fontSize: "32px",fontStyle: "normal",fontWeight: "600",lineHeight: "24px",letterSpacing: "0.72px"}}>PlayStation 5</h3>
                <p className={styles.subtitle}>Black and White version of the PS5 coming out on sale.</p>
                <button className={styles.shop_btn}>Shop Now</button>
            </div>
        </div>
        <div className={styles.right_img_block}>
            <div className={styles.right_block_upper}>
            <div className={styles.left_big_text}>
                <h3 style={{color: "var(--text, #FAFAFA)",fontFamily: "Inter",fontSize: "32px",fontStyle: "normal",fontWeight: "600",lineHeight: "24px",letterSpacing: "0.72px"}}>Women’s Collections</h3>
                <p className={styles.subtitle}>Featured woman collections that give you another vibe.</p>
                <button className={styles.shop_btn}>Shop Now</button>
            </div>
            </div>
            <div className={styles.right_block_down}>
                <div className={styles.last_block_img}>
                <div className={styles.left_big_text}>
                <h3 style={{color: "var(--text, #FAFAFA)",fontFamily: "Inter",fontSize: "32px",fontStyle: "normal",fontWeight: "600",lineHeight: "24px",letterSpacing: "0.72px"}}>Speakers</h3>
                <button className={styles.shop_btn}>Shop Now</button>
            </div>
                </div>
                <div className={styles.last_block_img}>
                <div className={styles.left_big_text}>
                <h3 style={{color: "var(--text, #FAFAFA)",fontFamily: "Inter",fontSize: "32px",fontStyle: "normal",fontWeight: "600",lineHeight: "24px",letterSpacing: "0.72px"}}>Perfume</h3>
                <button className={styles.shop_btn}>Shop Now</button>
            </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.services}>
        <div className={styles.services_block}>
            <div className={styles.services_img}>
                <img src="../../../public/servicesOne.png" alt="#" />
            </div>
            <div className={styles.service_text_block}>
                <h4 className={styles.serv_title}>FREE AND FAST DELIVERY</h4>
                <p className={styles.serv_subtitle}>Free delivery for all orders over $140</p>
            </div>
        </div>
        <div className={styles.services_block}>
            <div className={styles.services_img}>
                <img src="../../../public/servicesTwo.png" alt="#" />
            </div>
            <div className={styles.service_text_block}>
                <h4 className={styles.serv_title}>24/7 CUSTOMER SERVICE</h4>
                <p className={styles.serv_subtitle}>Friendly 24/7 customer support</p>
            </div>
        </div>
        <div className={styles.services_block}>
            <div className={styles.services_img}>
                <img src="../../../public/servicesThree.png" alt="#" />
            </div>
            <div className={styles.service_text_block}>
                <h4 className={styles.serv_title}>MONEY BACK GUARANTEE</h4>
                <p className={styles.serv_subtitle}>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
</>
  )
}
