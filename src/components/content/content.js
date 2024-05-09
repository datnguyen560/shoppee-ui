import './conten.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Content() {
    return (
        <div className='container'>
            <div className='container_first'>
                <div className='container_first_1'>
                    <div className='container_first_1_1'>
                        <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        >
                        <div className="carousel-indicators">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Link to='/shoppeemall'><img src="https://cf.shopee.vn/file/vn-50009109-b6c4d5546273c01ef9c72a89856f02ca_xxhdpi" className="d-block w-100" alt="aa" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link to='/shoppeemall'><img src="https://cf.shopee.vn/file/vn-50009109-b6d8513743ad60b2617c57aa3b2a7f29_xxhdpi" className="d-block w-100" alt="bb" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link to='/shoppeemall'><img src="https://cf.shopee.vn/file/vn-50009109-b3c16cc3a223a9d132e136023e6c8385_xxhdpi" className="d-block w-100" alt="cc" /></Link>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div className='container_first_1_2'>
                        <div className='container_first_1_2_1'>
                            <Link to='/payment'>
                                <img
                                src='https://cf.shopee.vn/file/vn-50009109-adecae4a1716b70953e7795b3e26729b_xhdpi' 
                                className="d-block w-100"
                                alt="a"
                                />
                            </Link>
                        </div>
                        <div className='container_first_1_2_2'>
                           <Link to='/promotionMB'>
                                <img
                                src='https://cf.shopee.vn/file/vn-50009109-958255fee8537927717127f3be6d4950_xhdpi' 
                                className="d-block w-100"
                                alt="a"
                                />
                           </Link>
                        </div>
                    </div>
                </div>
                <div className='container_first_2'>
                    <div className='container_first_2_1'>
                        <Link to='/voucherExtra'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-11d9732a464d895d3699ca40431d0bfd_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Voucher giảm đến 1 <br/> triệu</span>
                        </Link>
                    </div>
                    <div className='container_first_2_1'>
                        <Link to='/freeship'>
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Miếng phí ship <br/> - có shopee</span>
                        </Link>
                    </div>
                    <div className='container_first_2_1'>
                        <Link to='saleoff'> 
                            <img src="https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi" className='container_first_2_1all' alt="aa" />
                           <span className='all'> Khung giờ <br/>săn sale</span>
                        </Link>
                    </div>
                    <div className='container_first_2_1'>
                        <a href='#'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Mã giảm giá</span>
                        </a>
                    </div>
                    <div className='container_first_2_1'>
                        <a href='#'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi" className='container_first_2_1all' alt="aa" />
                           <span className='all'> Shopee <br/> siêu rẻ</span>
                        </a>
                    </div>
                    <div className='container_first_2_1'>
                        <a href='#'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Hàng hiệu outlet giảm <br/> 50%</span>
                        </a>
                    </div>
                    <div className='container_first_2_1'>
                        <a href='#'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-29961f92098bc9153b88332110a91c87_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Quốc tế <br/> deal đồng giá</span>
                        </a>
                    </div>
                    <div className='container_first_2_1'>
                        <a href='#'>
                            <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi" className='container_first_2_1all' alt="aa" />
                            <span className='all'>Nạp thẻ, dịch vụ <br/> & khách sạn</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='container_second'>
                <span className='container_second_1'><img src='https://down-vn.img.susercontent.com/file/vn-50009109-076b2d743b6240528b38f19c08f50ca1' alt='aa'/></span>
                <div className='container_second_2'>
                    <div className='container_second_2_1'>
                         <div className='container_second_2_1_1'>
                            <span className='1' >ĐỒ BẠN THÍCH Ở ĐÂY</span>
                            <a href='#'>
                               <span> Xem thêm</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                        <div className='container_second_2_1_2'>
                            <div className='container_second_2_1_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                            <div className='container_second_2_1_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                            <div className='container_second_2_1_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className='container_second_2_2'>
                        <div className='container_second_2_2_1'>
                            <span className='1' >HÀNG HIỆU OUTLET</span>
                            <a href='#'>
                               <span> Xem thêm</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </div>
                        <div className='container_second_2_2_2'>
                            <div className='container_second_2_2_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                            <div className='container_second_2_2_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                            <div className='container_second_2_2_2_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprikm0azlci35_tn' className='container_second_2_1_2_1_1' alt='aaa'/>
                                <p>299.000đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_third'>
                <div className='container_third_1'>Danh mục</div>
                <div className='container_third_2'>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' className='third' alt='aaa'/>
                        <p>Thời Trang Nam</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn' className='third' alt='aaa'/>
                        <p>Điện thoại & Phụ Kiện</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn' className='third' alt='aaa'/>
                        <p>Thiết Bị Điện Tử</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn' className='third' alt='aaa'/>
                        <p>Máy Tính & LapTop</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn' className='third' alt='aaa'/>
                        <p>Máy Ảnh & Máy Quay Phim</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn' className='third' alt='aaa'/>
                        <p>Đồng Hồ</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn' className='third' alt='aaa'/>
                        <p>Giày Dép Nam</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn' className='third' alt='aaa'/>
                        <p>Thiết Bị Điện Gia Dụng</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn' className='third' alt='aaa'/>
                        <p>Thể Thao & Du Lịch</p>
                    </div>
                    <div className='container_third_2_1'>
                        <img src='https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn' className='third' alt='aaa'/>
                        <p>Ôto & Xe Máy & Xe Đạp</p>
                    </div>

                </div>
                <div className='container_third_3'>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn' className='third' alt='aaa'/>
                        <p>Thời Trang Nữ</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn' className='third' alt='aaa'/>
                        <p>Mẹ & Bé</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn' className='third' alt='aaa'/>
                        <p>Nhà Cửa & Đời Sống</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' className='third' alt='aaa'/>
                        <p>Sắc Đẹp</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn' className='third' alt='aaa'/>
                        <p>Sức Khỏe</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn' className='third' alt='aaa'/>
                        <p>Giày Dép Nữ</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn' className='third' alt='aaa'/>
                        <p>Túi Ví Nữ</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn' className='third' alt='aaa'/>
                        <p>Phụ Kiện & Trang Sức Nữ</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn' className='third' alt='aaa'/>
                        <p>Bách Hóa Online</p>
                    </div>
                    <div className='container_third_3_1'>
                        <img src='https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn' className='third' alt='aaa'/>
                        <p>Nhà Sách Online</p>
                    </div>
                </div>
            </div>
            <div className='container_fourth'>
                <div className='container_fourth_1'>
                    <div className='container_fourth_1_1'>
                        <img src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png' className='fourth' alt='aa'/>
                        <p>01</p>
                        <p>12</p>
                        <p>30</p>
                    </div>
                    
                        <a href='#'>
                            <span> Xem tất cả</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    
                </div>
                <div className='container_fourth_2'>
                    <div className='container_fourth_2_1'>
                        <img src='https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052' className='fourth1' alt='aa'/>
                        <p>148.000đ</p>
                        <div className='container_fourth_2_1_1'>
                            <div className='container_fourth_2_1_1_1'></div>
                            <div className='container_fourth_2_1_1_2'>
                                ĐÃ BÁN 134
                            </div>
                        </div>
                        <div className='saleoff'>-59%</div>
                    </div>
                    <div className='container_fourth_2_1'>
                        <img src='https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052' className='fourth1' alt='aa'/>
                        <p>148.000đ</p>
                        <div className='container_fourth_2_1_1'>
                            <div className='container_fourth_2_1_1_1'></div>
                            <div className='container_fourth_2_1_1_2'>
                                ĐÃ BÁN 134
                            </div>
                        </div>
                        <div className='saleoff'>-59%</div>
                    </div>
                    <div className='container_fourth_2_1'>
                        <img src='https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052' className='fourth1' alt='aa'/>
                        <p>148.000đ</p>
                        <div className='container_fourth_2_1_1'>
                            <div className='container_fourth_2_1_1_1'></div>
                            <div className='container_fourth_2_1_1_2'>
                                ĐÃ BÁN 134
                            </div>
                        </div>
                        <div className='saleoff'>-59%</div>
                    </div>
                    <div className='container_fourth_2_1'>
                        <img src='https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052' className='fourth1' alt='aa'/>
                        <p>148.000đ</p>
                        <div className='container_fourth_2_1_1'>
                            <div className='container_fourth_2_1_1_1'></div>
                            <div className='container_fourth_2_1_1_2'>
                                ĐÃ BÁN 134
                            </div>
                        </div>
                        <div className='saleoff'>-59%</div>
                    </div>
                    <div className='container_fourth_2_1'>
                        <img src='https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052' className='fourth1' alt='aa'/>
                        <p>148.000đ</p>
                        <div className='container_fourth_2_1_1'>
                            <div className='container_fourth_2_1_1_1'></div>
                            <div className='container_fourth_2_1_1_2'>
                                ĐÃ BÁN 134
                            </div>
                        </div>
                        <div className='saleoff'>-59%</div>
                    </div>
                    
                </div>
            </div>
            <div className='container_fiveth'>
                <div className='container_fiveth_1'>
                    <img src='https://cf.shopee.vn/file/sg-11134252-7rd47-luszrg7edzyt98' className='fiveth' alt='aaa'/>
                </div>
            </div>
            <div className='container_sixth'>
                <div className='container_sixth_1'>
                    <div className='container_sixth_1_1'>
                        <h1>SHOPEE MALL</h1>
                        <p>7 Ngày Miễn Phí Trả Hàng</p>
                        <p>Hàng Chính Hãng 100%</p>
                        <p>Miễn Phí Vận Chuyển</p>
                    </div>
                    <div className='container_sixth_1_2'>
                        <a href='#'>
                            <span> Xem tất cả</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    </div>
                </div>
                <div className='container_sixth_2'>
                    <div className='container_sixth_2_1'>
                        <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        >
                        <div className="carousel-indicators">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://cf.shopee.vn/file/vn-50009109-7075b3258bb8de83ccaae9e3e1285b10" className="d-block w-100 sixthadd" alt="aa" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://cf.shopee.vn/file/vn-50009109-5a5be6a9f59804c2751f9544b7ca49f5" className="d-block w-100 sixthadd" alt="bb" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://cf.shopee.vn/file/vn-50009109-4c086e0ccd02d40ae06011c17852a052" className="d-block w-100 sixthadd" alt="cc" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div className='container_sixth_2_2'>
                        <div className='container_sixth_2_2_1'>
                            <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi' className='sixth' alt='aa'/>
                                <p>Thời Trang -50%</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-9f9896201e1c40c747e3bd3118b68d3a_xhdpi' className='sixth' alt='aa'/>
                                <p>Mua 1 được 2</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi' className='sixth' alt='aa'/>
                                <p>Deli siêu sale</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-b40bffb7cc40ddfe3e234c9d72c8584f_xhdpi' className='sixth' alt='aa'/>
                                <p>Giảm đến 50%</p>
                            </div>
                        </div>
                        <div className='container_sixth_2_2_2'>
                            <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-85797e97fb31583fb99b85283e415821_xhdpi' className='sixth' alt='aa'/>
                                <p>Mua 1 được 2</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi' className='sixth' alt='aa'/>
                                <p>Ưu đãi đến 50%</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec_xhdpi' className='sixth' alt='aa'/>
                                <p>Quà mọi đơn</p>
                            </div>
                             <div className='container_sixth_2_2_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi' className='sixth' alt='aa'/>
                                <p>Mua 1 tặng 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_seventh'>
                <div className='container_seventh_1'>
                    <h1>TÌM KIẾM HÀNG ĐẦU</h1>
                     <a href='#'>
                        <span> Xem tất cả</span>
                         <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
                 <div className='sevenlayout'>
                     <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/fe957d4a896f8b264c6b4ae1e18bc1b2' className='seventh' alt='aaa'/>
                        <h1>Sữa Tắm Lifebouy</h1>
                        <p>Bán 36k+/tháng</p>
                        <h2>TOP</h2>
                    </div>
                    <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/aa4177a5d563c5c5b9bc4536890ccc8e' className='seventh' alt='aaa'/>
                        <h1>Quần Lót Nam</h1>
                        <p>Bán 39k+/tháng</p>
                        <h2>TOP</h2>
                    </div>
                    <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/8875affa67a942d66628792657fe8b18' className='seventh' alt='aaa'/>
                        <h1>Quần Lót Nữ Cotton</h1>
                        <p>Bán 41k+/tháng</p>
                        <h2>TOP</h2>
                    </div>
                    <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='seventh' alt='aaa'/>
                        <h1>Kẹp Tóc Càng Cua Đơn Giản Cho Nữ</h1>
                        <p>Bán 11k+/tháng</p>
                        <h2>TOP</h2>
                    </div>
                    <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/ee2b1da4a8393468cfdbae245f39f62c' className='seventh' alt='aaa'/>
                        <h1>Son Kem Lì Mịn Môi Romand</h1>
                        <p>Bán 56k+/tháng</p>
                        <h2>TOP</h2>
                    </div>
                    <div className='container_seventh_2'>
                        <img src='https://down-vn.img.susercontent.com/file/e3568f284358e6f5c46223036e54ef84' className='seventh' alt='aaa'/>
                        <h1>Bông Tẩy Trang 3 Lớp Cotton Pads</h1>
                        <p>Bán 114k+/tháng</p>
                        <h2>TOP</h2>
                    </div>

                 </div>
                
            </div>
            <div className='container_eighth'>
                <h1>GỢI Ý HÔM NAY</h1>
                <div className='container_eighth_'>
                    <div className='container_eighth_1'>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                        <div className='container_eighth_1_1'>
                            <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                            <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                            <h3>3% Giảm </h3>
                            <div className='container_eighth_2_1'>
                                <h2>120.000đ</h2>
                                <p>Đã bán 7</p>
                            </div>
                            <div className='container_eighth_3_1'>
                                -43%
                            </div>
                            <div className='container_eighth_4_1'>
                                Yêu thích
                            </div>
                        </div>
                    </div>
                    <div className='container_eighth_1'>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                    </div>
                    <div className='container_eighth_1'>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                        <div className='container_eighth_1_1'>
                                <img src='https://down-vn.img.susercontent.com/file/56247e721a47ecce34e26b2916c23a54' className='eigth' alt='aa'/>
                                <p>Bình nước Cute dung tích 520ml Bình đựng nước...</p>
                                <h3>3% Giảm </h3>
                                <div className='container_eighth_2_1'>
                                    <h2>120.000đ</h2>
                                    <p>Đã bán 7</p>
                                </div>
                                <div className='container_eighth_3_1'>
                                    -43%
                                </div>
                                <div className='container_eighth_4_1'>
                                    Yêu thích
                                </div>
                        </div>
                    </div>                  
                    <div className='container_eighth_4'>
                        <h4>Xem thêm</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}    

export default Content;