import Client from "./api";

export const GetAllNtrests = async () => {
    try {
        const res = await Client.get('api/ntrest/ntrest')
        console.log(res, 'get all ntrest')
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetNtrestDetails = async (id) => {
    try {
        const res = await Client.get(`api/ntrest/${id}`)
        console.log(res, 'ntrest details')
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateNtrest = async (userId, data) => {
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
        console.log(res, "updated ntrest")
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
