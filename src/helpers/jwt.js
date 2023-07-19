import jsonwebtoken from "jsonwebtoken";

const generarJWT = ( uid )=>{

    return new Promise((resolve, reject)=>{
        const payload = {
            uid
        };
    
        jsonwebtoken.sign( payload, process.env.JWT_SECRET,{
            expiresIn: '12h'
        }, (err, token )=>{
            if (err) {
                console.log(err)
                reject('No se pudo generar JWT')
            }else{
                resolve(token)
            }
        })
    })
}

export default generarJWT