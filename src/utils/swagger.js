import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/word.js'];

const doc = {
  info: {
    title: 'Wikipedia Most Common English Words',
    description:
      'API for Wikipedia Most Common English Words (https://en.wikipedia.org/wiki/Most_common_words_in_English)',
    version: '3.0.0',
  },
  host: ['wiki-popular-words-api.fly.dev/'],
  basePath: 'api',
  schemes: ['https'],
  servers: [
    {
      url: 'http://localhost:5000/api',
      description: 'Local server',
    },
    {
      url: 'https://wiki-popular-words-api.fly.dev/api',
      description: 'Production server',
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
