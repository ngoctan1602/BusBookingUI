const RoutesRow = ({ item }) => {
    return (
        <tr class='grid  grid-cols-6 p-sm  border-txt my-[10px] '
        >
            {/* <td class='col-span-1'>{item.id}</td> */}
            <td class='col-span-3'>{item.stationStartName}</td>
            <td class='col-span-3'>{item.stationEndName}</td>
        </tr >
    );
}

export default RoutesRow;