import { v4 as uuid } from 'uuid';
import aws from 'aws-sdk';

async function createAuction(event, context) {
  const { title } = JSON.parse(event.body);
  const now = new Date();

  const auction = {
    id: uuid(),
    title,
    status: 'OPEN',
    createdAt: now.toISOString()
  };

  const dynamodb = new aws.DynamoDB.DocumentClient();

  await dynamodb.put({
    TableName: 'auctions_table',
    Item: auction
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = createAuction;
