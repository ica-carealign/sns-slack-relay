# sns-slack-relay

> The quickest way to get an SNS message to your Slack-oriented team.

The [SNS] pub/sub model makes it easy to create domain-specific topics and publish events to them, often revealing vital debug information. Now you can deploy this [AWS Lambda] function to your account and start relaying those messages to the channel assigned to your [Incoming Webhook] integration with Slack. If the SNS Topic ARN matches one of the ones listed in your `config.yml` file, the configured image URL is used in place of the default avatar.

### Installation

* Clone this repository, then install dependencies with `npm install`.
* Create a `config.yml` file with appropriate values. See the next section for details.
* If not already installed, install the [Grunt CLI]: `npm install -g grunt-cli`.
* Build a Lambda-compliant deployment package: `grunt build-package`.
* Provide AWS Lambda with your deployment package. See the [AWS Lambda documentation] for details.

### Configuration

* `webhookPath`: The portion following "https://hooks.slack.com/services/" in the Webhook URL from the Integration Settings section of your Slack Incoming Webhook.
* `avatars`: Key-value pairs mapping SNS ARNs to avatar (image) URLs.

The relay uses [node-yaml-config] to parse the `config.yml` file. See `config.yml.example` for details.

[SNS]: https://aws.amazon.com/sns/
[AWS Lambda]: https://aws.amazon.com/lambda/
[Incoming Webhook]: https://api.slack.com/incoming-webhooks
[Grunt CLI]: https://github.com/gruntjs/grunt-cli
[AWS Lambda documentation]: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html
[node-yaml-config]: https://www.npmjs.com/package/node-yaml-config
