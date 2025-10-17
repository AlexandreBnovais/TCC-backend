import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "3.0.0",
        title: "BACKEND API DOC",
        description: "This is doc specific a API",
    },
    servers: [
        {
            uri: "localhost:8000",
            description: "",
        },
    ],
    tags: [
        {
            name: "",
            descriptions: "",
        },
    ],
    secureSchema: {
        type: "http",
        scheme: "basic",
        in: "http",
    },
    components: {},
};

const outputFile = "./src/swagger-output.json";
const endpointsFiles = ["./src/routes/web.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
