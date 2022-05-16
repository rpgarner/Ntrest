import Client from "./api";

export const GetAllNtrests = async () => {
    try {
        const res = await Client.get('api/ntrest/ntrest')
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetNtrestDetails = async (id) => {
    try {
        const res = await Client.get(`api/ntrest/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const AddNtrest = async (userId, data) => {
    try{
        const res = await Client.post(`api/ntrest/${userId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdatedNtrest = async (ntrestId, data) => {
    try{
        const res = await Client.put(`api/ntrest/${ntrestId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteNtrest = async (ntrestId) => {
    try{
        await Client.delete(`api/ntrest/${ntrestId}`)
    } catch (error) {
        throw error
    }
}
