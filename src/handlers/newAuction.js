import aws from 'aws-sdk';

const sqs = new aws.SQS({
  apiVersion: 'latest',
  region: 'eu-west-1'
});

exports.handler = async function (event, context) {

  const { title } = JSON.parse(event.body);

  await sqs.sendMessage({
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: JSON.stringify({
      title
    })
  }).promise();

  return {
    statusCode: 201,
    body: 'Queue item added... i think?'
  };
};
