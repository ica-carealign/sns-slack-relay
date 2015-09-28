"use strict";

function handleSnsEvent(event, context) {
  console.log(JSON.stringify(event, null, 2));
  context.succeed();
}

module.exports = handleSnsEvent;
