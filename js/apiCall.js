// const axios = require("axios").default

const BASE_URL = "http://46.137.197.173:3000/"
// const BASE_URL = "http://localhost:3000/"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
});

instance.interceptors.request.use((config)=>{
    let token = localStorage.getItem(TOKEN_KEY);
    if(token) {
        config.headers = {
            authorization: "Bearer " + token
        }
    }
    return config
})

instance.interceptors.response.use(
    (resSuccess)=>resSuccess,
    (res)=>{
        console.warn(res.response)
        if(!res.response) return res
        if(res.response.status == 400 ) alert("User Error");
        if(res.response.status == 401 )  alert("Please Login First")
        if(res.response.status == 403 )  alert("Invalid Token")
        if(res.response.status == 500 )  alert("Internal Server Error, Please Connect to admin.")
        return res
    }
)
const newUserRegister = (param) => {
    return new Promise((resolve,reject)=>{
        instance.post("register",{param})
            .then(response=> {
                alert("Successfully Sign Up")
                resolve(response.data)
            })
            .catch(error=> {
                reject(error);
            })
    })        
}

const addExpenseData = (param) => {
    return new Promise((resolve,reject)=>{
        instance.post("expense",{param})
            .then(response=> {
                alert("Successfully added")
                resolve(response.data)
            })
            .catch(error=> {
                reject(error);
            })
    })        
}

const getUserData = () => {
    return new Promise((resolve,reject)=>{
        instance.get("users")
            .then(response=> resolve(response.data))
            .catch(error=> {
                reject(error);
            })
    })        
}

const deleteUser = (id = "") => {
    return new Promise((resolve,reject)=>{
        instance.delete("users?id="+id)
            .then(response=> resolve(response.data))
            .catch(error=> {
                reject(error);
            })
    })        
}


const submitLogin = (param) => {
    return new Promise((resolve,reject)=>{
            instance.post("login",param)
                .then(response=> {
                    resolve(response.data)
                    localStorage.setItem(TOKEN_KEY,response.data.token)
                    window.location = "dashboard.html"
                })
                .catch(error=> {
                    reject(error);
                })
        })        
    }

const incomeData = (param) => {
    return new Promise((resolve,reject)=>{
        instance.post("income",param)
            .then(response=> {
                resolve(response.data)
                })
                .catch(error=> {
                    reject(error);
                })
        })        
    }    
