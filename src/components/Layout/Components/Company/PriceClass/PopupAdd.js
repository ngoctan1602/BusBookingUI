import Popup from "reactjs-popup";
import InputConfirmInfo from "../../InputConfirmInfo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import * as PriceClassSV from "../../../../../services/PriceClassSV"
import ReactLoading from 'react-loading';
import { Button, Col, ConfigProvider, Form, Input, InputNumber, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const PopupAdd = ({ fetchData }) => {
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
    // const handleClose = (close) => {
    //     close()
    // }
    // const getItemValue = async () => {
    //     if (objectAdd.name === "" || objectAdd.description === "" || objectAdd.value < 0) {
    //         notifyWarning("Các trường không được bỏ trống và đơn giá không được bé hơn 0")
    //         return
    //     }
    //     setLoading(true)
    //     try {
    //         const resp = await PriceClassSV.createPriceSV(objectAdd);
    //         setLoading(false)
    //         if (!resp.isError) {
    //             notifySuccess("Thêm mới loại giá thành công")
    //             setObjectAdd({ name: '', description: '', value: 0 })
    //         }
    //         else {
    //             notifyError("Lỗi khi thêm")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log(objectAdd);
    // }
    const addNewPriceClass = async () => {
        // console.log(form.getFieldsValue())
        setLoading(true)
        try {
            const resp = await PriceClassSV.createPriceSV(form.getFieldsValue());
            if (!resp.isError) {
                notifySuccess("Thêm mới loại giá thành công")
                // setObjectAdd({ name: '', description: '', value: 0 })
                form.resetFields()
                fetchData()
            }
            else {
                notifyError("Lỗi khi thêm")
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
        // console.log(objectAdd);
    }

    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    return (
        <Popup trigger={<button class="flex justify-center"> <FontAwesomeIcon icon={faPlus} color="#00B873" class='cursor-pointer confirm-button border-button p-sm border-[1px] w-[40px] h-[40px]'></FontAwesomeIcon></button>} position="right center"
            modal
            nested
            closeOnDocumentClick={false}
            {... { contentStyle }}
        >
            {
                close => (

                    <div class='text-16 text-txt relative'>
                        <p class='text-20 text-center font-bold m-md'>Thêm mới loại giá</p>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBorder: "#B4B4B8"
                                },
                                components: {
                                    Input: {
                                        /* here is your component tokens */
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
                                onFinish={() => addNewPriceClass()}
                                onFinishFailed={() => notifyWarning("Vui lòng nhập đầy đủ các trường bắt buộc")}
                            >
                                <Form.Item
                                    name="name"
                                    label="Tên"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng không bỏ trống tên"
                                        },
                                    ]}
                                >
                                    <Input allowClear placeholder="Nhập tên loại giá" />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label="Mô tả"

                                >
                                    <TextArea className="min-h-[100px] max-h-[200px]" allowClear placeholder="Nhập mô tả" />
                                </Form.Item>
                                <Form.Item
                                    hasFeedback
                                    name="value"
                                    label="Phụ thu (%)"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng không bỏ trống phụ thu"
                                        },
                                        {
                                            type: 'number',
                                            max: 100,
                                            min: 0,
                                            message: "Vui lòng nhập số trong khoảng 0 đến 100",
                                            transform(value) {
                                                return Number(value)
                                            },
                                        }
                                    ]}
                                >
                                    < Input allowClear style={{ width: '100%' }} />
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

export default PopupAdd;