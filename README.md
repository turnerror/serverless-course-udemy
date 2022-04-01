

## Getting started
`npm install`
// AWS - cli installed and configured for the correct IAM user.
`sls deploy --verbose`

## Endpoints

```
POST /auction   
body: JSON
{
  "title": "Enter my title here"
}
```
This endpoint in turn should publish a `NewAuction` SNS topic.
The `logAuction` lambda is subscribed and will then log the message.
Also NewAuctionQueue (an SQS queue) is also subscribed and should have the topic added to it.
Then the `saveAuction` lambda should pull from the `NewAuctionQueue` and insert a row into dynamodb.