console.log(context);
var context = require.context('./src/test/spec', true, /-Spec\.js$/);

context.keys().forEach(context);
