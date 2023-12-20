import React from 'react';
import Styles from './shop.module.css'
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


const data =[
   { subTitle:" 68 ", title:" پوشاک مردانه ", Icon:Tshirt},
   { subTitle:" 25 ", title:" زیورالات ", Icon:Jewelry},
   { subTitle:" 25 ", title:" هدیه نقدی ", Icon:Banknotes},
   { subTitle:" 59 ", title:" اسباب بازی ", Icon:Christmas},
   { subTitle:" 325 ", title:" کالای دیجیتال " ,Icon:Smartphone},
   { subTitle:" 25 ", title:" وسایل ورزشی ", Icon:Soccer},
   { subTitle:" 25 ", title:" رز جاودان ", Icon:Flower},
   { subTitle:" 630 ", title:" اکسسوری ", Icon:Souvenirs},
   { subTitle:" 100 ", title:" کیف و کفش ", Icon:Women},
]

const ShopPage = () => {

   return (
      <>
         <div className={Styles.container}>
                <div className={Styles.boxWrapper}>
                  {
                     data.map((item , index) => (
                        <ServicesButton className={Styles.ServicesButton2} 
                           key={index}
                           {...item}
                        />
                     ))
                  }
            </div>
            <Button className={Styles.Button} text=" همه محصولات " />
         </div>
      </>
   );
};

export default ShopPage;