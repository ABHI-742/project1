const mongoose = require('mongoose')

const mongoURI= "mongodb+srv://avishekhthakur159:connect012@cluster0.emfwg3w.mongodb.net/Connector?retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');

    }
    catch(error)
    {
        console.log('error is',error);
    }
}

module.exports=mongoDB