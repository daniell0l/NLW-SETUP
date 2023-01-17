import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();
const prisma = new PrismaClient()

app.register(cors)

app.get("/", async () => {
    const habits = await prisma.habit.findMany(
        // {
        //     where: {
        //         title: {
        //             startsWith: "acorda"
        //         }
        //     }
        // }
    )

    return habits
})

app.listen({ port: 3333 }, () => console.log("server is running"));
