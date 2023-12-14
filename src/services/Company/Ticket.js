import * as BaseAPI from '../BaseAPI';

export const createTicket = async (data) => {
    return await BaseAPI.postItem(ticketServices.createTicket, data);
}
export const getAllTicketInCompany = async () => {
    return await BaseAPI.getItems(ticketServices.getAllTicketInCompany)
}

export const changeCompleteStatus = async (id) => {
    return await BaseAPI.putItem(ticketServices.changeCompleteStatus, null, id)
}
const ticketServices = {
    changeCompleteStatus: 'tickets/changeCompleteStatus',
    createTicket: 'tickets/create',
    getAllTicketInCompany: 'tickets/getAll',
}