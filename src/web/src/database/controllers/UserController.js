import User from "../schemas/UserSchema";

import { connect } from "../database";

const findOneUser = async queryUser => {
    const connection = await connect()
    if (!connection) return false;

    return await User.findOne(queryUser);
}

export {
    findOneUser,
};