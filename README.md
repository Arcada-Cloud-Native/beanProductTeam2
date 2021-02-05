# beanProduct

This is the Bean hat product branch for Cloud native apps course.
The API consists of 1 model and 1 route.

Our hat.js model consists of a constant that has the the following properties:
    _id: mongoose.Types.ObjectId,
    name: String,
    size: Number,
    color: String,
    description: String,
    price: Number,
    picture: String
    
The route has the implementations of POST that contains the constant from our model, which can be saved on a database such as Azure and potentially AWS.
You can of course also GET the data that has been saved on your database with out API.
    
    
Swagger API mockup filehttps://app.swaggerhub.com/apis/doodeljoodel/openAPI3/1.0.1
