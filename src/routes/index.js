import Home from "../pages/home";
import Login from "../components/login/login";
import Signup from "../components/signup/signup";
import Shoppeemall from "../pages/pagesDetail/shopeemall/shopeemall";
import Payment from "../pages/pagesDetail/payment/payment";
import PromotionMB from "../pages/pagesDetail/promotionMB/promotionMB";
import VoucherExtra from "../pages/pagesDetail/voucherExtra/voucherExtra";
import Freeship from "../pages/pagesDetail/freeship/freeship";
import Saleoff from "../pages/pagesDetail/saleoff/saleoff";


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/shoppeemall', component: Shoppeemall},
    {path: '/payment', component: Payment},
    {path: '/promotionMB', component: PromotionMB},
    {path: '/voucherExtra', component: VoucherExtra},
    {path: '/freeship', component: Freeship},
    {path: '/saleoff', component: Saleoff},
    
];

const privateRoutes = [ 
    //Đường dẫn sau khi login mới vào được
];

export {publicRoutes, privateRoutes};