import { PrismaClient } from "@prisma/client"
import { CreateNextContextOptions } from "@trpc/server/adapters/next"




const createClient = () => {
    return new PrismaClient();
};

export const createContext = async(_opts : CreateNextContextOptions) => {
    return {
        prisma : createClient(),
    };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

