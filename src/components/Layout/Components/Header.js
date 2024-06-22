import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logotrip.png"
import Button from "./Button";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import avatarDefault from '../../../assets/images/avatar.png'
import configs from "../../../configs";
import { Icon } from "@mui/material";
import { Menu, Modal } from "antd";
const { SubMenu } = Menu;

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutOpen, setLogoutOpen] = useState(false);
    const logout = () => {
        // setLogoutOpen(true)
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("avatar")
        setLogoutOpen(false)
        setTimeout(
            () => {

                navigate("/login")
                window.location.reload();
            }, 1000
        )
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn((token === null || token === undefined) ? false : true);
    }, []);

    const avatar = localStorage.getItem('avatar') === 'null' ? avatarDefault : localStorage.getItem('avatar');
    return (

        <header className="flex justify-center bg-[#97D163]">
            <div className="w-100% h-[80px] flex items-center justify-between w-[90%]">
                <Link className="hover:opacity-95" to="/">
                    <img src={logo} className="w-[120px] h-[60px] rounded-8 object-cover" />
                </Link>
                <div className="my-4">
                    <div className="flex items-center justify-between text-bg text-16">
                        {/* <Link className="hoverLink" to="/introduce">
                            Giới thiệu
                        </Link> */}
                        <Link className="hoverLink" to="/introduce">
                            Trở thành đối tác
                        </Link>
                        <Link className="hoverLink" to="/introduce">
                            Chính sách của Y-Trip
                        </Link>
                        <div className="h-[20px] bg-bg w-[0.1px]">

                        </div>
                        <Link className="flex items-center justify-center px-8" to="/contact">
                            <FontAwesomeIcon icon={faPhone} beat className="p-sm m-sm" />
                            <p className="hover:underline cursor-pointer">0923140493</p>
                        </Link>


                        <Modal
                            title="Bạn có muốn đăng xuất"
                            open={logoutOpen}
                            onOk={logout}
                            onCancel={() => setLogoutOpen(false)}
                            // okText="Ok"
                            okButtonProps={{ style: { background: "#1677FF" } }}
                            cancelText="Hủy"
                        >

                        </Modal>
                        {isLoggedIn ? (
                            <Menu className="mx-md custom-menu">
                                <SubMenu className="custom-submenu" >
                                    <Menu.Item onClick={() => setLogoutOpen(true)} key="1">Đăng xuất</Menu.Item>
                                    <Menu.Item onClick={() => navigate("/info")} key="2">Thông tin cá nhân</Menu.Item>
                                    <Menu.Item onClick={() => navigate("/order")} key="3">Quản lý chuyến đi</Menu.Item>
                                    <Menu.Item onClick={() => navigate("/his-review")} key="4">Đánh giá của tôi</Menu.Item>
                                </SubMenu>
                            </Menu>
                            // <Link to={configs.routers.profile} id="NotLogin" className="px-[10px]">
                            //     <div class='w-[100px] h-[40px] shrink-0  overflow-hidden z-1 relative '>
                            //         <img class=' w-[40px] h-[40px] object-cover rounded-full' src={avatar} alt="Avatar"></img>
                            //     </div>
                            // </Link>
                        ) : (
                            <Link to={"/login"} className="px-4" id="Login">
                                <Button type="border" content="Đăng nhập">

                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div >
        </header >
    );
}

export default Header;