
import { useNavigate } from "react-router-dom";
const ManageTicketRow = ({ item, onChangeStatus }) => {
    const navigate = useNavigate();

    return (

        <tr class='grid grid-cols-12 p-sm border-t-[1px] border-txt gap-md '
            style={{ background: (item.status === 7 || item.status === 0) ? "#75718a" : "" }}
        >

            <td class='col-span-1'>{item.id}</td>
            <td class='col-span-2'>{item.busNumber}</td>
            <td class='col-span-3'>{item.busType}</td>
            <td class='col-span-2'>{new Date(item.date).toLocaleString()}</td>
            <td class='col-span-2'>{item.totalEmptySeat}</td>


            <td class='col-span-2'>
                {
                    item.status === 7 ?
                        <select class='bg-[#e1e1e1] outline-none '
                            style={{ background: item.status === 1 ? "#75718a" : "" }}
                            // onChange={(e) => onChangeStatus(item.id, Number(e.target.value))}
                            disabled
                        >
                            <option selected={item.status === 1 ? true : false} value={1} >Chờ xuất bến</option>
                            <option selected={item.status === 0 ? true : false} value={0} >Hủy</option>
                            <option selected={item.status === 7 ? true : false} value={7} >Đã hoàn thành</option>

                        </select> :
                        <select class='bg-[#e1e1e1] outline-none'
                            // style={{ background: item.status === 3 ? "#75718a" : "" }}
                            onChange={(e) => onChangeStatus(item.id, Number(e.target.value))}
                        >
                            <option selected={item.status === 1 ? true : false} value={1} >Chờ xuất bến</option>
                            <option selected={item.status === 0 ? true : false} value={0} >Hủy</option>
                            <option selected={item.status === 7 ? true : false} value={7} >Đã hoàn thành</option>

                        </select>
                }

            </td>



        </tr >
    );
}

export default ManageTicketRow;