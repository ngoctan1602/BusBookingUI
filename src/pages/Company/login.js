import { useCallback, useState } from "react";
import adminlogo from "../../assets/images/AdminLogo.png"
import InputConfirmInfo from "../../components/Layout/Components/InputConfirmInfo";
import { Link, useNavigate } from "react-router-dom";
import * as authServices from "../../services/AuthServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopupOTP from "../../components/Layout/Components/PopupOTP";
import ImageUploadPopup from '../../components/Layout/Components/ImagePopup';
import { Button } from "antd";
const CompanyLogin = () => {
    const navigate = useNavigate();
    document.title = "Đăng nhập người quản trị"
    const [account, setAccount] = useState(
        {
            username: '',
            password: '',
        }
    )

    const notifySuccess = () => toast.success('Đăng nhập thành công!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyError = () => toast.error('Đăng nhập thất bại! Nhập đúng tài khoản và mật khẩu', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        // e.preventDefault();
        setLoading(true)
        try {
            const response = await authServices.companyLogin(account)
            if (!response.isError) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                localStorage.setItem('usernameCompany', response.data.username);
                localStorage.setItem('avatar', response.data.avatar);
                setLoading(false)
                notifySuccess()
                setTimeout(() => {
                    window.location.href = '/company/dashboard';
                }, 1500);
            }
            else {
                setLoading(false)
                notifyError()
            }
        } catch (error) {
            setLoading(false)
            notifyError()
        }
    }


    const onChange = (id, value) => {
        const updatedItems = item.map(item => {
            if (item.id === id) {
                setAccount({ ...account, [item.id]: value })
                return { ...item, value: value };

            }
            return { ...item };
        });
        setItem(updatedItems)
    }

    const onChangeShowPassword = (isShow) => {
        const updatedItems = item.map(item => {
            if (item.id === "password" && isShow) {
                return { ...item, type: "password" };
            }
            if (item.id === "password" && !isShow) {
                return { ...item, type: "text" };
            }
            return { ...item };
        });
        setItem(updatedItems)
    }

    const [item, setItem] = useState(
        [
            {
                id: "username",
                content: "Tên đăng nhập:",
                type: "text",
                placeholder: "Nhập tên đăng nhập",
                value: account.username,
                spanWidth: 170,
                background: "#e1e1e1"
            },
            {
                id: "password",
                content: "Mật khẩu:",
                type: "password",
                pw: "password",
                placeholder: "Nhập mật khẩu",
                value: account.password,
                spanWidth: 150,
                background: "#e1e1e1"
            }
        ]
    );
    const [isImagePopupOpen, setImagePopupOpen] = useState(false);

    const handleImageUpload = (file) => {
        // Xử lý file hình ảnh ở đây, ví dụ: tải lên server, lưu trữ URL, vv.
        console.log('File uploaded:', file);
    };


    return (
        <div class='w-full h-[100vh] bg-bgContent flex justify-center items-center'>
            {/* <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button type="button" onClick={open}>
                    Open
                </button>
            </div> */}
            {/* <div>
                <button onClick={() => setImagePopupOpen(true)}>Mở popup thêm hình ảnh</button>
                <ImageUploadPopup isOpen={isImagePopupOpen} onClose={() => setImagePopupOpen(false)} onImageUpload={handleImageUpload} />
            </div> */}

            <div class='w-2/3 h-2/3 border-none box-shadow-content rounded-md overflow-hidden flex'>
                <div class='w-[40%] h-full bg-bgLogin bg-cover bg-no-repeat text-bg flex flex-col items-center'>
                    <img src={adminlogo} class='mt-md shrink-0 w-[100px] h-[100px] rounded-full'></img>
                    <p class='text-[30px] font-semibold shrink-0'>
                        Chào mừng quay trở lại !
                    </p>
                    <p class='text-18 shrink-0'>
                        Đăng nhập để quản lý hệ thống nhà xe
                    </p>
                    <p class='text-16 m-md'>
                        Những chuyến đi dài của bạn hãy để chúng mình lo nhé.
                        Chỉ cần một cú click chuột mọi thứ đều trong tầm tay
                    </p>

                </div>

                <div class='w-[60%] h-full text-txt flex items-center bg-bg'>
                    <div class='w-full h-2/3 items-center flex flex-col'>
                        <div class='w-full grid grid-flow-row grid-cols-10 gap-sm items-center my-sm'>
                            <p class='col-start-4 col-span-6 font-bold text-[20px] uppercase'>Đăng nhập vào hệ thống nhà xe</p>
                        </div>
                        {
                            item.map((item, index) => (
                                <div class='w-full grid grid-flow-row grid-cols-10 gap-sm items-center my-[4px]'>
                                    <p class='text-16 mx-md col-span-3 font-semibold'>{item.content} </p>
                                    <div class='col-span-6'>
                                        <InputConfirmInfo item={
                                            {
                                                type: item.type,
                                                placeholder: item.placeholder,
                                                value: item.value,
                                                spanWidth: item.spanWidth,
                                                id: item.id,
                                                pw: item.pw,
                                                background: "#fff"
                                            }}
                                            onChange={onChange}
                                            onChangeShowPassword={onChangeShowPassword}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                        <div class='w-full grid grid-flow-row grid-cols-10 gap-sm items-center my-md'>
                            <div className="col-start-4 col-span-6 ">

                                <Button loading={loading} style={{ width: "100%", height: 40, }} onClick={onSubmit}>
                                    Đăng nhập
                                </Button>

                            </div>

                        </div>
                        <div class='w-full grid grid-flow-row grid-cols-10 gap-sm items-center my-md'>
                            <p className="col-span-5 col-start-4 italic text-[16px] ">

                                Bạn chưa có tài khoản quản trị?
                            </p>
                            <Link class='col-start-9 col-span-2 italic text-txt text-[16px] 
                                hover:underline
                            ' to={'/company/register'}>
                                Đăng ký
                            </Link>

                        </div>


                    </div>



                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </div >
    );
}

export default CompanyLogin;