import { PrismaClient } from "@prisma/client"




export const createClient = () => {

    return new PrismaClient({
        log :["query"]
    }).$extends(
        
    )
}