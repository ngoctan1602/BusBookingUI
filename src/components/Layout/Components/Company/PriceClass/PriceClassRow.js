import { useCallback, useState } from "react";
// import PopupUpdate from "./PopupUpdate";
import CurrencyFormat from "react-currency-format";
import ReactLoading from 'react-loading';
const PriceClassRow = ({ item, onChangeStatus, onUpdate, fecthData }) => {

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
        <tr class='grid  grid-cols-12 p-sm border-t-[1px] border-txt gap-sm'
            style={{ background: item.status === 2 ? "#75718a" : "" }}
        >
            {/* <td class='col-span-2'>{item.id}</td> */}
            <td class='col-span-3 col-start-2'>{item.name}</td>
            <td class='col-span-3'>{item.description}</td>
            <td class='col-span-2 text-center'>
                <CurrencyFormat value={item.value} displayType={'text'} thousandSeparator={true} suffix={' %'} />
            </td>
            {
                item.status === 2 ?
                    <td class='col-span-2'>Đang chờ</td>
                    : <td class='col-span-2'>Hoạt động</td>
            }
        </tr >
    );
}

export default PriceClassRow;