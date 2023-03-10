const jsonParser = data => {
    if (typeof data === "object") return data
    if (typeof data === "string") return JSON.parse(data)
}

export {
    jsonParser
}