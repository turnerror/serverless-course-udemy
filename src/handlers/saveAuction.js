import { v4 as uuid } from 'uuid';
import aws from 'aws-sdk';

exports.handler = async function (event, context) {
  console.info('lambda running', JSON.stringify({ event, context }));
  const dynamodb = new aws.DynamoDB.DocumentClient();

  const entries = [];
  for (const notification of event.Records) {
    const { Message } = JSON.parse(notification.body);
    const now = new Date();

    const auction = {
      id: uuid(),
      title: JSON.parse(Message).title,
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
};
