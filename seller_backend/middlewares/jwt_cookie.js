import jwt from 'jsonwebtoken'

const set_cookie = (email,res) => {

    const data = email
    // if(!data){
    //     return res.json({message:"No token"})
    // }
    const token = jwt.sign(email, 'secret_key');

    console.log(token)

    res.cookie("token", token, { expiresIn: '1h' })
}
export default set_cookie