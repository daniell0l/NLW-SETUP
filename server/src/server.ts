import fastify from "fastify";

const app = fastify();

app.get("/", () => {
    return "hello word"
})

app.listen({ port: 3333 }, () => console.log("server is running"));