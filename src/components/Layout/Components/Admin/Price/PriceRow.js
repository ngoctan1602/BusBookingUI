import { useCallback, useState } from "react";
// import PopupUpdate from "./PopupUpdate";
import CurrencyFormat from "react-currency-format";
import ReactLoading from 'react-loading';
const PriceRow = ({ item, onChangeStatus, onUpdate, fecthData }) => {

    const [itemUpdate, setItemUpdate] = useState({
        title: "Cập nhật loại ghế",
        item: [
            {
                id: 1, name: "id", content: "Id", spanWidth: 20, placeholder: "Id", value: item.id
            },
            {
                id: 2, name: "type", content: "Tên loại ghế", spanWidth: 120, placeholder: "Tên loại ghế", value: item.type
            },
            {
                id: 3, name: "description", content: "Mô tả", spanWidth: 100, placeholder: "Thêm mô tả", value: item.description
            },
            {
                id: 4, name: "price", content: "Đơn giá", spanWidth: 100, placeholder: "Thêm đơn giá", value: item.price
            }
        ],
    })

    const [updateTypeBus, setUpdateTypeBus] = useState({
        id: item.id,
        type: item.type,
        description: item.description,
        price: item.price,

    });
    const closePopup = () => {
        setUpdateTypeBus({
            id: item.id,
            type: item.type,
            description: item.description,
            price: item.price,

        })
    }
    const updateItemValue = (id, newValue) => {
        itemUpdate.item.map(item => {
            if (item.id === id) {
                setUpdateTypeBus({ ...updateTypeBus, [item.name]: newValue })
            }
        });
    };
    const success = useCallback(() => {
        let isSuccess = true;
        for (let a in updateTypeBus) {
            if (updateTypeBus[a] === "") {
                isSuccess = false
            }
        }
        return isSuccess
    }, [updateTypeBus])

    return (
        <tr class='grid  grid-cols-12 p-sm border-t-[1px] border-txt'

        >
            {/* <th class='col-span-3'>Công ty</th>
                        <th class='col-span-3'>Tuyến đi</th>
                        <th class='col-span-2'>Giá</th>
                        <th class='col-span-2'>Phụ phí</th>
                        <th class='col-span-2'>Trạng thái</th> */}
            <td class='col-span-3'>{item.companyName}</td>
            <td class='col-span-3'>{item.routeId}</td>
            <td class='col-span-2'>
                <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
            </td>
            <td class='col-span-2'>
                <CurrencyFormat value={item.surcharges} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
            </td>
            {/* {
                item.status === 2 ?
                    <td class='col-span-2 bg-hover-txt text-bg'>Đang chờ</td>
                    : <td class='col-span-2'>Hoạt động</td>
            } */}
            {
                item.status === 2 ?
                    <td className="col-span-2">
                        <select className="w-full outline-none bg-txt-final p-sm rounded-sm" onChange={(e) => onChangeStatus(item.id, Number(e.target.value))}>
                            <option value={2} selected={item.status === 2 ? true : false}>
                                Đang chờ
                            </option>
                            <option value={1} selected={item.status === 1 ? true : false}>
                                Hoạt động
                            </option>
                        </select>
                    </td> :
                    <td className="col-span-2" >
                        <select className="w-full outline-none bg-bgPopup p-sm rounded-sm" onChange={(e) => onChangeStatus(item.id, Number(e.target.value))}>
                            <option value={2} selected={item.status === 2 ? true : false}>
                                Đang chờ
                            </option>
                            <option value={1} selected={item.status === 1 ? true : false}>
                                Hoạt động
                            </option>
                        </select>
                    </td>
            }
        </tr >
    );
}

export default PriceRow;