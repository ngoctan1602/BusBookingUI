import { useState } from "react";

const CheckBusStationRow = ({ item, nameRadio, onUpdate, objectAdd }) => {

    const updateCheck = (name, value) => {
        onUpdate(name, value);
    }
    return (
        <tr class='grid  grid-cols-12 p-sm border-t-[1px] border-txt'
            style={{ background: item.status === 0 ? "#75718a" : "", color: item.status === 0 ? "#F2ECFF" : "" }}
        >
            <td>
                <input className="w-[20px] h-[20px]"
                    type="radio"
                    name={nameRadio} value={item.id}
                    onClick={() => updateCheck(nameRadio, item.id)}
                    checked={item.id === objectAdd[nameRadio] ? true : false}
                >

                </input>
            </td>
            <td class='col-span-1'>{item.id}</td>
            <td class='col-span-3'>{item.name}</td>
            {/* <td class='col-span-3'>{item.description}</td> */}

            <td class='col-span-6'>
                {item.addressDb}
            </td>

        </tr >
    );
}

export default CheckBusStationRow;