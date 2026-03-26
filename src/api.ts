import axios from "axios";

export const getUsers = () => {
    return axios.get("https://dummyjson.com/users").then((response) => {
        return response.data.users;
    }).catch((error) => {
        console.error("Failed to fetch users", error);
        throw error;
    });
}