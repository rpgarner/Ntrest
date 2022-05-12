import Client from "./api";

export const GetAllEvents = async () => {
    try {
        const res = await Client.get('api/event/recent')
        console.log(res, 'get all Events')
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetEventDetails = async (id) => {
    try {
        const res = await Client.get(`api/event/${id}`)
        console.log(res, 'event details')
        return res.data
    } catch (error) {
        throw error
    }
}


export const GetEventsByNtrestPk = async (ntrestId) => {
    try {
      const res = await Client.get(`api/event/ntrest/${ntrestId}`);
      console.log(res, 'events by ntrest')
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
        const res = await Client.put(`api/ntrest/${eventId}`, data)
        console.log(res, "updated event")
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