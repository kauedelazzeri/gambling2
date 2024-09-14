const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.gambling2,
    Item: {
      apostaId: AWS.util.uuid.v4(),
      titulo: data.titulo,
      opcoes: data.opcoes,
      criador: event.requestContext.identity.cognitoIdentityId,
      dataCriacao: new Date().toISOString(),
    },
  };

  try {
    await docClient.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ mensagem: 'Aposta criada com sucesso!' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: 'Erro ao criar aposta', detalhes: err }),
    };
  }
};
