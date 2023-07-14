import { api } from "../utils/contants";
const endPoint: string = "api/users";
const getUsers = async () => {
    try {
        const req = await fetch(`${api}/${endPoint}`);
        return await req.json();
    } catch (error) {
        throw new Error("Connection Error");
    }
}

export { getUsers }