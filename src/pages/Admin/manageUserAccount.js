
import { useState, useEffect } from "react";
import UserAccountRow from "../../components/Layout/Components/Admin/manageAccountUser/UserAccountRow";
import Paginate from "../../components/Layout/Components/Paginate"
import * as XLSX from 'xlsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import * as CustomerServices from "../../services/CustomerServices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import PaginatedItemsWithAPI from "../../components/Layout/Components/PaginateWithApi";
import Search from "antd/es/input/Search";
import exportDataToExcel from "../../components/Common/exportExcel";
import { Empty } from "antd";


const ManageUserAccount = () => {
    const [updateLoading, setUpdateLoading] = useState(false)
    const notifySuccess = (message) => toast.success(message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyError = (message) => toast.error(message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyWarning = (message) => toast.warning(message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [userAccount, setUserAccount] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await CustomerServices.GetAll({ pageSize: 10, pageIndex: currentPage + 1 });
            setLoading(false)
            if (!response.isError) {
                setTotalPage(response.data.pageTotal);
                setUserAccount(response.data.items);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {

        fetchData();
    }, [currentPage]);
    useEffect(() => {

        fetchData();
    }, []);
    // Hàm cập nhật trạng thái item
    const updateStatus = (id, value) => {
        setUpdateLoading(true)
        try {
            if (value === 1) {

                const resp = CustomerServices.changeIsActive({ customerId: id });
                console.log(resp)
                setUpdateLoading(false)
                if (!resp.isError) {
                    notifySuccess("Cập nhật trạng thái thành công")
                    setTimeout(
                        () =>
                            fetchData()
                        , 2000
                    )
                }
                else {
                    notifyError("Cập nhật trạng thái thất bại")
                }
            }
            else if (value === 4) {
                const resp = CustomerServices.changeIsLock({ customerId: id });
                setUpdateLoading(false)
                console.log(resp)
                if (!resp.isError) {
                    notifySuccess("Cập nhật trạng thái thành công")
                    setTimeout(
                        () =>
                            fetchData()
                        , 2000
                    )
                }
                else {
                    notifyError("Cập nhật trạng thái thất bại")
                }
            }
            else if (value === 0) {
                const resp = CustomerServices.changeIsDelete({ customerId: id });
                setUpdateLoading(false)
                console.log(resp)
                if (!resp.isError) {
                    notifySuccess("Cập nhật trạng thái thành công")
                    setTimeout(
                        () =>
                            fetchData()
                        , 2000
                    )
                }
                else {
                    notifyError("Cập nhật trạng thái thất bại")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    const Find = async (param) => {
        setLoading(true)
        try {
            const response = await CustomerServices.find({ param: param, pageSize: 10, pageIndex: 1 });
            setLoading(false)
            if (!response.isError)
                setUserAccount(response.data.items)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    }
    return (
        <div class='w-full text-txt txt-16 mt-[20px]'>

            <div class='grid grid-cols-9 grid-flow-row gap-4 items-center'>
                <p class='col-span-3 font-black uppercase text-20'>Quản lý tài khoản người dùng</p>
                <Search
                    placeholder="Tìm kiếm theo username hoặc họ tên"
                    allowClear
                    className="col-start-4 col-span-5 p-md"
                    onSearch={Find}
                />
                <button class="flex justify-center" onClick={() => exportDataToExcel(userAccount, notifySuccess, notifyError)}>
                    <FontAwesomeIcon icon={faFileExcel} color="#00B873" class='cursor-pointer confirm-button border-button p-sm border-[1px] w-[40px] h-[40px]'>
                    </FontAwesomeIcon>
                </button>
            </div>
            <table class="w-full my-md rounded-md border-collapse  text-txt text-16 overflow-hidden box-shadow-content min-h-[300px]">
                <thead className="border-b-2">
                    <tr class='grid bg-bg grid-cols-11 p-sm text-left gap-md'>
                        <th class='col-span-2'>Username</th>
                        <th class='col-span-2'>Họ và tên</th>
                        <th class='col-span-2'>Ảnh đại diện</th>
                        <th class='col-span-2'>Email</th>
                        <th class='col-span-2'>Trạng thái</th>

                    </tr>
                </thead>
                <tbody class='bg-bg relative'>
                    {
                        updateLoading &&
                        <div class='absolute bg-hover-txt w-[100%] h-[300px] z-20 opacity-40'>
                            <ReactLoading
                                type="spinningBubbles" color="#e1e1e1"
                                height={'10%'} width={'10%'}
                                className="absolute left-[45%] top-[20%]  "
                            />
                        </div>
                    }
                    {

                        loading ?
                            <div className="animate-pulse bg-hover-txt w-full h-[300px] text-bg text-center">

                            </div>

                            :
                            !loading && userAccount.length > 0 ?
                                <PaginatedItemsWithAPI handleClick={handlePageClick} componentToRender={UserAccountRow} items={userAccount} pageCount={totalPage} fetchData={fetchData} currentPage={currentPage} updateStatus={updateStatus}></PaginatedItemsWithAPI>
                                :
                                <Empty description="Chưa có người dùng nào"></Empty>
                    }
                </tbody>
            </table>
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

export default ManageUserAccount;