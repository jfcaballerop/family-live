import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
export const salt = bcrypt.genSaltSync(10)

export function encrypt(data, saltV = salt) {
    const hashedData = bcrypt.hashSync(data, saltV) // hash created previously created upon sign up
    return hashedData
}

export function compareHash(pass, hash) {
    return bcrypt.compareSync(pass, hash)
}