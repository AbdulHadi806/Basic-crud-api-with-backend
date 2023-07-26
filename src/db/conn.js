const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/crudapp", {}).then(() => {
    console.log("connection successfull with mongo")
}).catch((err) => {
    console.log(err, "...connection failed with mongo")
})
