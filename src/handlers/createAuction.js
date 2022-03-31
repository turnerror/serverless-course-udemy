import aws from 'aws-sdk';

const sns = new aws.SNS({
  apiVersion: 'latest',
  region: 'eu-west-1'
});

exports.handler = async function (event, context) {
  const { title } = JSON.parse(event.body);
  console.info('received', JSON.stringify({ event, context }));

  const sent = await sns.publish({
    TopicArn: process.env.TOPIC_ARN,
    Message: JSON.stringify({
      title
    })
  }).promise();

  console.info('end', JSON.stringify({ sent }));
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Queue item added... i think?',
      context: sent
    })
  };
};
