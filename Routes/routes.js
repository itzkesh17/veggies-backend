import express from "express"

import { 
    createUser, 
    deleteUser, 
    readAllUsers, 
    readUser, 
    updateUser 
} from "../API Controller/controller.js"


const route = express.Router()

route.post("/create", createUser)

route.get("/read", readAllUsers)

route.get("/read/:id", readUser)

route.patch("/update/:id", updateUser)

route.delete("/delete/:id", deleteUser)




export default route;