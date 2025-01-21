import jwt from 'jsonwebtoken'

const jwt_verification = (req, res, next) => {
    const data = req.cookies.token

    console.log(data, 'cookies')
    if (!data) {
        console.log('no token')
        return res.status(400).json({ message: "You must logged in" })
    }

    // console.log(data)

    jwt.verify(data, 'secret_key', function (err, decoded) {
        if(err){

        }
        // console.log("the data", decoded) // bar
        req.user_data=decoded;
    });

    next(); // Pass control to the next middleware or route handler
};

export default jwt_verification
