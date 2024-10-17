import { PrismaClient } from "@prisma/client";

const prismaClientSingleton =()=> new PrismaClient();

declare const globalThis:{
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

prisma.$disconnect()

export default prisma;

if(process.env.NODE_ENV === 'production') globalThis.prismaGlobal = prisma