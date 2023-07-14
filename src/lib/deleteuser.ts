import { api } from "../utils/contants";

const END_POINT = "api/deleteuser";

export const deleteUserEndPoint = async (id: string | number) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify({ id })
    }
    try {
        const req = await fetch(`${api}/${END_POINT}`, options);
        return await req.json();
    } catch (error) {
        throw new Error(error);
    }

}