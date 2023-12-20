import React from 'react';
import Styles from './shop.module.css'
import HamburgMenu_icon from '../../assets/icons/hamburgMenuIcon'
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
import ServicesButton2 from '../../components/ServicesButton2'


const data =[
   { test:" 68 ", text:" پوشاک مردانه ", Icon:Tshirt},
   { test:" 25 ", text:" زیورالات ", Icon:Jewelry},
   { test:" 25 ", text:" هدیه نقدی ", Icon:Banknotes},
   { test:" 59 ", text:" اسباب بازی ", Icon:Christmas},
   { test:" 325 ", text:" کالای دیجیتال " ,Icon:Smartphone},
   { test:" 25 ", text:" وسایل ورزشی ", Icon:Soccer},
   { test:" 25 ", text:" رز جاودان ", Icon:Flower},
   { test:" 630 ", text:" اکسسوری ", Icon:Souvenirs},
   { test:" 100 ", text:" کیف و کفش ", Icon:Women},
]

const ShopPage = () => {

   return (
      <>
         <div className={Styles.container}>
            <div className={Styles.header}>
                        <HamburgMenu_icon className={Styles.menu}/>
                    <div>
                        <h3> فروشگاه کادوبین </h3>
                        <span> انتخاب دسته بندی </span>
                    </div>
                </div>
                <div className={Styles.boxWrapper}>
                  {
                     data.map((item , index) => {
                        <ServicesButton2 //className={Styles.ServicesButton2} 
                           key={index}
                           {...item}
                        />
                     })
                  }

            {/* <ServicesButton2 className={Styles.ServicesButton2}
            />
            <ServicesButton2 className={Styles.ServicesButton2}
            /> */}
            </div>
            {/* <div className={Styles.group}>
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            </div>
            <div className={Styles.group}>
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            <ServicesButton2 className={Styles.ServicesButton2}
            />
            </div> */}
            <Button className={Styles.Button} text=" همه محصولات " />
         </div>
      </>
   );
};

export default ShopPage;