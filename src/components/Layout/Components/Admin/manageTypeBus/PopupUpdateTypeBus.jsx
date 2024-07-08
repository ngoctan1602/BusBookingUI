import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import * as TypeBusServices from "../../../../../services/TypeBusServices"
// import * as PriceSV from "../../../../../services/PriceSV";

import { Button, Col, ConfigProvider, Form, Input, Row, } from "antd";
import { NumericFormat } from "react-number-format";
import TextArea from "antd/es/input/TextArea";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import purgeSpecificReducers from '../../../../../store/purgeReducers';
import { resetTypeBus } from "../../../../../store/slice/typebusSlice"
import { useSelector, useDispatch } from 'react-redux';

const PopupAddTypeBus = ({ refetchData, open, changeOpen }) => {
    const typebusupdate = useSelector((state) => state.typebus)
    console.log(typebusupdate)
    const contentStyle = { backgroundColor: '#FFFF', borderRadius: "8px", width: "40%" };
    const notifySuccess = (message) => toast.success(message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyError = (message) => toast.error(message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyWarning = (message) => toast.warning(message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const updateBusType = async () => {
        setLoading(true)
        try {
            const objectAdd = form.getFieldsValue();
            const newObjectAdd = {
                Id: typebusupdate.Id,
                ...objectAdd,
                status: typebusupdate.status
            }
            const resp = await TypeBusServices.updateTypeBus(newObjectAdd);
            if (!resp.isError) {
                notifySuccess("Chỉnh sửa loại buýt thành công")
                // form.resetFields()
                refetchData()
            }
            else {
                notifyError(resp.data)
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false)

    }

    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();


    return (
        <Popup trigger={<button class="outline-none  w-full flex justify-center "> <FontAwesomeIcon icon={faPenToSquare} color="#00B873" class='cursor-pointer confirm-button w-[30px] h-[30px]'></FontAwesomeIcon></button>} position="right center"
            modal
            nested
            open={true}
            closeOnDocumentClick={false}
            {... { contentStyle }}
            onClose={() => changeOpen(false)}
        >
            {
                close => (

                    <div class='text-16 text-txt relative'>
                        <p class='text-20 text-center font-bold m-md'>Chỉnh sửa loại xe</p>

                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBorder: "#B4B4B8"
                                },
                                components: {
                                    Input: {
                                        paddingBlock: 8,
                                    },
                                },
                            }}
                        >


                            <Form
                                form={form}
                                layout="horizontal"
                                style={{ maxWidth: '600px', margin: '0 auto' }}
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 16 }}
                                onFinish={() => updateBusType()}
                                onFinishFailed={() => notifyWarning("Vui lòng nhập đầy đủ các trường bắt buộc")}
                            >
                                <Form.Item
                                    hasFeedback
                                    name="Name"
                                    label="Tên"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng không bỏ trống tên loại buýt"
                                        },

                                    ]}
                                >
                                    < Input defaultValue={typebusupdate.Name} allowClear style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item
                                    name="Description"
                                    label="Mô tả"
                                >
                                    < TextArea defaultValue={typebusupdate.Description} allowClear className="w-full min-h-[100px] max-h-[200px]" />
                                </Form.Item>

                                <Form.Item
                                    hasFeedback
                                    name="TotalSeats"
                                    label="Số chỗ ngồi"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng không bỏ trống chỗ ngòi"
                                        },
                                        {
                                            type: 'number',

                                            min: 0,
                                            message: "Vui lòng nhập số nguyên lớn hơn 0",
                                            transform(value) {
                                                return Number(value)
                                            },
                                        }
                                    ]}
                                >
                                    < Input defaultValue={typebusupdate.TotalSeats} allowClear style={{ width: '100%' }} />
                                </Form.Item>
                            </Form>
                        </ConfigProvider>
                        <div class='w-full my-md'
                            style={{ height: 50 }}>
                            <Row style={{ width: "100%", height: 50 }}>
                                <Col offset={6} span={7}>
                                    <Button loading={loading ? true : false} className="w-full" onClick={form.submit}>Xác nhận</Button>
                                </Col>
                                <Col offset={2} span={7}>
                                    <Button disabled={loading ? true : false} className="w-full" onClick={close}>Hủy</Button>
                                </Col>
                            </Row>
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
                        </div>
                    </div>
                )
            }

        </Popup>
    );
}

export default PopupAddTypeBus;