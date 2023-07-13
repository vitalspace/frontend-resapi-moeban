const endPoint: string = "api/createuser";
import { api } from "../utils/api";

interface UserData {
  name: string
  img: string
  email: string
  bio: string
}

export const createUserEndPoint = async (userdata: UserData) => {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify(userdata)
  }

  try {
    const req = await fetch(`${api}/${endPoint}`, options)
    return await req.json();
  } catch (error) {
    throw new Error("Connection Error");
  }
}