import axios from "./api"

const AuthService = {
    async register(user) {
        const { data } = await axios.post("/users", { user });
        return data;
    },
    async login(user) {
        const { data } = await axios.post("/users/login", user);
        return data;
    },
    // async getUser() { },
};

export default AuthService;