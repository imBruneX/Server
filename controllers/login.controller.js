export const Login = (req, res) => {
    const { username, password } = req.body;
    console.log(username,password,process.env.password)
    console.log(password == process.env.password)

    if(!username || !password) {
        return res.status(400).json({
            message: "O utilizador ou a password nao foram inseridos"
        })
    }

    if(username == process.env.user && password == process.env.password) {
        res.status(200).json({
            message: "Login efetuado com sucesso"
        })
    }  else {
        res.status(401).json({
            message: "O utilizador ou a password estao incorretos"
        })
    }
} 