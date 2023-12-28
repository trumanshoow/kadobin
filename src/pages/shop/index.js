import React from 'react';
import styles from './shop.module.css'
import Banknotes from '../../assets/icons/BanknotesCardIcon'
import Christmas from '../../assets/icons/ChristmasPenguinCardIcon'
import Flower from '../../assets/icons/flowerCardIcon'
import Jewelry from '../../assets/icons/jewelryCardIcon'
import Smartphone from '../../assets/icons/SmartphoneCardIcon'
import Soccer from '../../assets/icons/soccerBallCardIcon'
import Souvenirs from '../../assets/icons/souvenirsCardIcon'
import Tshirt from '../../assets/icons/tShirtCardIcon'
import Women from '../../assets/icons/womensShoeCardIcon'
import Button from '../../components/button/index'
import ServicesButton from '../../components/LorgServicesButton'
import MainLayout from '../../layout/main';
import HamburgMenu_icon from "../../assets/icons/hamburgMenu_icon";

const data = [
   { subTitle: " 25 ", title: " هدیه نقدی ", Icon: Banknotes },
   { subTitle: " 25 ", title: " زیورالات ", Icon: Jewelry },
   { subTitle: " 68 ", title: " پوشاک مردانه ", Icon: Tshirt },
   { subTitle: " 25 ", title: " وسایل ورزشی ", Icon: Soccer },
   { subTitle: " 325 ", title: " کالای دیجیتال ", Icon: Smartphone },
   { subTitle: " 59 ", title: " اسباب بازی ", Icon: Christmas },
   { subTitle: " 100 ", title: " کیف و کفش ", Icon: Women },
   { subTitle: " 630 ", title: " اکسسوری ", Icon: Souvenirs },
   { subTitle: " 25 ", title: " رز جاودان ", Icon: Flower },
]

const ShopPage = () => {

   return (

      <MainLayout
          icon={<HamburgMenu_icon width="2.5rem"/>}
          title="فروشگاه کادوبین"
          subtitle="انتخاب دسته بندی"
          headerColor="var(--babyBg)"
      >
         <div className={styles.body}>
            <div className={styles.container}>
               <div className={styles.boxWrapper}>
                  {
                     data.map((item, index) => (
                        <ServicesButton className={styles.ServicesButton2}
                           key={index}
                           {...item}
                        />
                     ))
                  }
               </div>
               <Button className={styles.Button} text=" همه محصولات " />
            </div>
         </div>
      </MainLayout>
   );
};

export default ShopPage;