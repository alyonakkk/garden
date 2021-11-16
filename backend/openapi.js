const swagger = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Dangle",
    version: "1.0.0",
    description: "The REST API for Dangle Panel service",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Development server",
    },
  ],
  paths: {
    [`/api/catalog`]: {
      get: {
        tags: ["store"],
        summary: "Get stores list",
        description: "Return array with stores list",
        responses: {
          200: {
            description: "A list of pets.",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                },
              },
            },
          },
        },
      },
    },
    "/api/catalog/{shop}": {
      get: {
        tags: ["store"],
        summary: "Get catalog of store",
        description: "Return object with products in store",
        parameters: [
          {
            name: "shop",
            in: "path",
            description: "name of store",
            required: true,
            schema: {
              type: "string",
            },
            style: "simple",
          },
        ],
        responses: {
          200: {
            description: "A list of pets.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/catalog/{shop}/{item}": {
      get: {
        tags: ["store"],
        summary: "Get detail card of product",
        description: "Return object with information of product",
        parameters: [
          {
            name: "shop",
            in: "path",
            description: "name of store",
            required: true,
            schema: {
              type: "string",
            },
            style: "simple",
          },
          {
            name: "item",
            in: "path",
            description: "name of product",
            required: true,
            schema: {
              type: "string",
            },
            style: "simple",
          },
        ],
        responses: {
          200: {
            description: "A list of pets.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swagger;
