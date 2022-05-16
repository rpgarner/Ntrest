import Client from "./api";

export const GetAllEvents = async () => {
    try {
        const res = await Client.get('api/event/recent')
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetEventDetails = async (id) => {
    try {
        const res = await Client.get(`api/event/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}


export const GetEventsByNtrestPk = async (ntrestId) => {
    try {
      const res = await Client.get(`api/event/ntrest/${ntrestId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

export const CreateEvent = async (userId, ntrestId, data) => {
    try{
        const res = await Client.post(`api/event/${userId}/${ntrestId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const Updatedevent = async (eventId, data) => {
    try{
        const res = await Client.put(`api/event/${eventId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteEvent = async (eventId) => {
    try{
        await Client.delete(`api/event/${eventId}`)
    } catch (error) {
        throw error
    }
}