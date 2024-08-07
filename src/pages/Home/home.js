import bgSearch from "../../assets/images/bustrip.jpg"
import discount from "../../assets/images/discount.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Layout/Components/Button";
import Input from "../../components/Layout/Components/Input";
import Card from "../../components/Layout/Components/Card";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../store/slice/searchSlice";
import { Col, Row } from "antd";
import CardTotal from "../../components/Layout/Components/DashBoard/Cards/CardTotal";
import CardPolicy from "./CardPolicy";
import { orange } from "@mui/material/colors";
const Home = () => {
    const dispatch = useDispatch();
    const searchSlice = useSelector((state) => state.search);
    console.log(searchSlice)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: false,
        // nextArrow: false,

        // autoplay: true,
        // autoplaySpeed: 3500
    };

    let navigate = useNavigate();
    const [cards, setCards] = useState([
        { id: 1, location: 'Đà Nẵng- Sài Gòn', src: bgSearch, price: '120.000đ' },
        { id: 2, location: 'Nha Trang - Sài Gòn', src: bgSearch, price: '200.000đ' },
        { id: 3, location: 'Hà Nội - Nha Trang', src: bgSearch, price: '100.000đ' },
        { id: 4, location: 'Hà Nội - Nha Trang', src: bgSearch, price: '100.000đ' },
    ])

    const [discounts, setDiscounts] = useState([
        { id: 1, content: 'Giảm giá 50%', src: discount, type: 'discount' },
        { id: 2, content: 'Giảm giá 30%', src: discount, type: 'discount' },
        { id: 3, content: 'Giảm giá 20%', src: discount, type: 'discount' },
        { id: 4, content: 'Giảm giá 10%', src: discount, type: 'discount' },
    ])

    const [introduce, setIntroduce] = useState([
        {
            intro: '2000+ nhà xe chất lượng cao', content: '5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.'
            , src: faBus, type: 'introduce'
        },
        {
            intro: 'Đặt vé dễ dàng', content: 'Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.'
            , src: faTicket, type: 'introduce'
        },
        {
            intro: 'Đảm bảo có vé', content: 'Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.'
            , src: faIdBadge, type: 'introduce'
        },
        {
            intro: 'Nhiều ưu đãi', content: 'Hàng ngàn ưu đãi cực chất độc quyền tại Y-Trip.'
            , src: faGift, type: 'introduce'
        },

    ])

    const [comments, setComments] = useState([
        {
            id: 1, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            , name: "Nguyễn Thái Ngọc Tân", type: 'comment', src: bgSearch
        },
        {
            id: 2, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            , name: "Nguyễn Thái Ngọc Phước", type: 'comment', src: bgSearch
        },
        {
            id: 3, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            , name: "Nguyễn Thái Ngọc Tân", type: 'comment', src: bgSearch
        },
        {
            id: 4, content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            , name: "Nguyễn Thái Ngọc Phước", type: 'comment', src: bgSearch
        },

    ])
    // const search = JSON.parse(localStorage.getItem('formSearch'));
    const [loading, setLoading] = useState(false)
    const [formSearch, setFormSearch] = useState({
        stationStart: searchSlice ? searchSlice.stationStart : '',
        stationEnd: searchSlice ? searchSlice.stationEnd : '',
        dateTime: searchSlice ? searchSlice.dateTime : '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormSearch({ ...formSearch, [name]: value });
    }

    const btnClick = () => {
        localStorage.setItem("formSearch", JSON.stringify(formSearch));
        const objectSearch = {
            ...formSearch,
            ["dateTime"]: new Date(formSearch.dateTime).toISOString().split('T')[0],
        }
        // dispatch(setSearch(formSearch))
        dispatch(setSearch(objectSearch))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate("/search")
        }, 1500);
        // onSearch(formSearch)
    }

    return (
        <div className="w-screen min-h-[700px] flex flex-col items-center relative">
            {
                loading &&
                <div class='absolute bg-hover-txt w-[100%] h-full z-50 opacity-40'>
                    <ReactLoading
                        type="spinningBubbles" color="#e1e1e1"
                        height={'5%'} width={'5%'}
                        className="absolute left-1/2 top-[30%]  "
                    />
                </div>
            }
            <div className="w-[100%] h-[400px] flex relative">
                <div className="z-20 items-center justify-center flex flex-col w-[100%] h-[100%]">


                    <div className='w-content grid grid-cols-12 h-full  grid-rows-5 pt-[120px]'>

                        <div class=' col-span-8 col-start-3'>
                            <p className="h-full font-bold text-bg text-24 flex items-center justify-center">
                                Nơi nào đang chờ bạn khám phá ?
                            </p>
                        </div>
                        <div className=" 
                        border-[1px] border-txt outline-none
                        col-span-8 col-start-3 row-start-2 row-span-3 bg-bg grid grid-cols-12 grid-flow-row p-md rounded-md shadow-lg h-[150px]">
                            <div className='col-span-3 col-start-1 h-full text-hover-txt grid grid-cols-6 grid-flow-row'>
                                <div className="col-span-1 flex items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className='w-full h-[20px]' />
                                </div>
                                <div className="col-span-5 flex items-center ">
                                    <Input placeholder={'Nơi đi'} content='Nơi đi' onChange={onChange} name="stationStart" value={formSearch.stationStart}></Input>
                                </div>
                            </div>

                            <div className='col-span-3  h-full text-hover-txt grid grid-cols-6 grid-flow-row'>
                                <div className="col-span-1 flex items-center">
                                    <FontAwesomeIcon icon={faLocationCrosshairs} className='w-full h-[20px]' />
                                </div>
                                <div className="col-span-5 flex items-center ">
                                    <Input placeholder={'Nơi đến'} content='Nơi đến' onChange={onChange} name="stationEnd" value={formSearch.stationEnd}></Input>
                                </div>
                            </div>

                            <div className='col-span-3  h-full text-hover-txt grid grid-cols-6 grid-flow-row'>
                                <div className="col-span-1 flex items-center">
                                    <FontAwesomeIcon icon={faCalendarDays} className='w-full h-[20px]' />
                                </div>
                                <div className="col-span-5 flex items-center  ">
                                    <Input type="date" placeholder={'01/01/2000'} content='Ngày xuất phát' onChange={onChange} name="dateTime" value={formSearch.dateTime}></Input>
                                </div>
                            </div>

                            <div className='col-span-2 col-start-10 h-full text-hover-txt  flex items-center'>
                                <button className='w-full button-hover ml-md mt-lg text-txt' onClick={btnClick} >Tìm chuyến</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bgSearch} className="w-[100%] object-cover h-[100%] z-1 absolute">

                </img>
            </div>
            <Row className="w-full min-h-[300px] ">
                <Row className="w-full m-sm flex flex-col justify-center items-center">
                    <p className="w-full text-center uppercase text-[20px] font-[400] mb-sm" >Chính sách của Y-trip</p>
                    <Row className="w-[60%] mb-md">
                        <Col span={12} className="px-sm">

                            <CardPolicy content="Chỉ có thể hủy vé trước 3 ngày khi xe xuất phát" color="#9DDE8B" />
                        </Col>
                        <Col span={12} className="px-sm">
                            <CardPolicy content="Cam kết xuất bến đúng giờ." color="#37B7C3" />
                        </Col>
                    </Row>

                    <Row className="w-[60%]">
                        <Col span={12} className="px-sm">
                            <CardPolicy content="Mọi hành khách đặt vé sẽ được giữ chỗ 100%, KHÔNG để khách nằm luồng." color="#006769" />
                        </Col>
                        <Col span={12} className="px-sm">
                            <CardPolicy content="Mọi khiếu nại về nhà xe vui lòng liên hệ qua số điện thoại: 0334886974" color="#4793AF" />
                        </Col>
                    </Row>

                </Row>
                <Row className="w-[100%] m-sm flex flex-col justify-center items-center">
                    <p className="w-full text-center uppercase text-[20px] font-[400] mb-sm" >Giới thiệu hệ thống Y-trip</p>

                    <p className="w-[80%] text-justify  text-[16px]  mb-sm">Hệ thống đặt vé xe khách là một giải pháp tiện lợi và hiện đại, giúp hành khách dễ dàng lựa chọn và đặt vé cho các chuyến đi của mình. Với sự phát triển của công nghệ, hệ thống này mang lại nhiều lợi ích vượt trội, từ việc tiết kiệm thời gian, tối ưu hóa chi phí cho đến việc nâng cao trải nghiệm của khách hàng.

                        Đầu tiên, hệ thống đặt vé xe khách cho phép người dùng tra cứu lịch trình, giá vé và các dịch vụ liên quan của nhiều hãng xe khác nhau. Nhờ đó, hành khách có thể so sánh và lựa chọn chuyến đi phù hợp nhất với nhu cầu và ngân sách của mình. Bên cạnh đó, việc đặt vé trực tuyến cũng giúp người dùng tránh được tình trạng xếp hàng mua vé tại các bến xe, tiết kiệm thời gian và công sức.

                        Thứ hai, hệ thống này còn tích hợp nhiều phương thức thanh toán linh hoạt và an toàn, từ thanh toán qua thẻ ngân hàng, ví điện tử cho đến chuyển khoản trực tiếp. Điều này giúp khách hàng dễ dàng thực hiện giao dịch mọi lúc, mọi nơi mà không gặp bất kỳ trở ngại nào.

                        Cuối cùng, hệ thống đặt vé xe khách còn cung cấp các tính năng hữu ích như cập nhật thông tin chuyến đi, thông báo lịch trình thay đổi hay hỗ trợ khách hàng 24/7. Những tính năng này giúp hành khách luôn nắm bắt được thông tin cần thiết và có trải nghiệm tốt hơn trong suốt quá trình di chuyển.

                        Tóm lại, hệ thống đặt vé xe khách không chỉ đơn giản hóa quá trình mua vé mà còn mang lại nhiều lợi ích thiết thực, góp phần nâng cao chất lượng dịch vụ vận tải và sự hài lòng của khách hàng.</p>
                </Row>
            </Row >

            {/* <div className="min-h-[300px] w-[60%] flex flex-col justify-between pt-[50px]">
                <h4 className="font-[500] text-[24px] my-[20px]">Chuyến đi nổi bật</h4>
                <div className="flex min-h-[80%] w-full justify-between">

                    {
                        cards.map((item, index) => (
                            <Card key={index} price={item.price} location={item.location} src={item.src}>
                            </Card>
                        ))
                    }
                </div>
            </div> */}


            {/* <div className="min-h-[300px] w-[60%] flex flex-col justify-between mt-md pt-[50px]">
                <h4 className="font-[500] text-[24px] my-[20px] ">Ưu đãi nổi bật</h4>
                <div className="flex min-h-[80%] w-full justify-between">
                    {
                        discounts.map((item, index) => (
                            <Card key={index} content={item.content} src={item.src} type={item.type}>
                            </Card>
                        ))
                    }
                </div>
            </div> */}


            {/* <div className='min-h-[420px] w-[60%] my-md pt-[50px]'>
                <p className='font-bold text-[24px] my-[20px]'>Khách hàng nói gì về Y-Trip</p>
                <Slider {...settings}>
                    {
                        comments.map((item, index) => (
                            <Card key={index} content={item.content} name={item.name} src={item.src} type={item.type}>
                            </Card>
                        ))
                    }
                </Slider>
            </div> */}

            {/* <div className='min-h-[420px] w-[60%] pt-[50px] my-md flex flex-col'>
                <p className="font-bold text-[24px] my-md">Nền tảng kết nối người dùng và nhà xe</p>
                <div className='flex justify-between w-full h-[80%]'>
                
                    {
                        introduce.map((item, index) => (
                            <Card key={index} content={item.content} intro={item.intro} src={item.src} type={item.type}>
                            </Card>
                        ))
                    }
                </div>
            </div> */}




        </div >
    );
}

export default Home;