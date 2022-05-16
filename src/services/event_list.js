import Client from "./api";


export const GetEvent_ListByuserPk = async (userId) => {
    try {
      const res = await Client.get(`api/Event_list/${userId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };


export const CreateEvent_List = async (userId, data) => {
    try{
        const res = await Client.post(`api/Event_list/${userId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}