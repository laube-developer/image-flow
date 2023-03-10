import Cookies from "js-cookie"

const getCookUser = () => {
    const result = Cookies.get("auth_user")
    return result === undefined ? false : JSON.parse(result)
}

const getHasAuth = () => {
    const result = Cookies.get("has_logedin")
    return result === undefined ? false : true
}

const setCookUser = (user) => {
    Cookies.set("auth_user", JSON.stringify(user), {
        expires: 1
    })
    Cookies.set("has_logedin", "true", {
        expires: 1
    })
}

export {
    getCookUser,
    getHasAuth,
    setCookUser,
}