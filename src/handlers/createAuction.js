import { v4 as uuid } from 'uuid';
import aws from 'aws-sdk';

async function createAuction(event, context) {
  console.info('lambda running', { event, context });
  const dynamodb = new aws.DynamoDB.DocumentClient();

  const entries = [];
  for (const message of event.Records) {
    const { title } = JSON.parse(message.body);
    const now = new Date();

    const auction = {
      id: uuid(),
      title,
      status: 'OPEN',
      createdAt: now.toISOString()
    };

    entries.push(dynamodb.put({
      TableName: 'auctions_table',
      Item: auction
    }).promise());
  }

  const result = await Promise.all(entries);

  console.info('Lambda finished running.', { result });
}

export const handler = createAuction;
