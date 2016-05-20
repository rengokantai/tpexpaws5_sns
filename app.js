var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var sns = new AWS.SNS({params:{TopicArn:'arn:aws:sns:us-east-1:41268679:ke'}});
sns.publish({Message:'testke'},function(err,data){
if(err)console.log(err);
else{
	console.log(JSON.stringify(data))
}})
