const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
        
    try
    {
        const decoded = jwt.verify(req.header('authorization'), "secret");
        console.log(decoded);
    
        //om vi lyckas verifiera JWT så anropar vi nästa call back funktion (byter i praktiken
        //att vi går vidare till funktionen som sparar ett nytt rum i databasen)
        next();
    }

    //Anropas om vi inte lyckas verifiera JWT
    catch(error)
    {
        res.status(401).json({
            message: "Authentication failed"
        });
    }
};