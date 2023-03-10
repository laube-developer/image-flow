import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPwd = async plainTextPwd => {
    return await bcrypt.hash(plainTextPwd, saltRounds)
}

const compare = async (plainTextPwd, dbhash) => {
    return await bcrypt.compare(plainTextPwd, dbhash)
}

export {
    hashPwd,
    compare
}