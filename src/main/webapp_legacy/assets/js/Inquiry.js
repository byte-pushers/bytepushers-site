define(['bytepushers_core'], function(BytePushers){
    return {
        Inquiry: function(messageConfig)
            {
                var name = (Object.isDefined(messageConfig && Object.isString(messageConfig.name))) ? messageConfig.name : null,
                    email = (Object.isDefined(messageConfig && Object.isString(messageConfig.email))) ? messageConfig.email : null,
                    phoneNumber = (Object.isDefined(messageConfig && Object.isString(messageConfig.phoneNumber))) ? messageConfig.phoneNumber : null,
                    message = (Object.isDefined(messageConfig && Object.isString(messageConfig.message))) ? messageConfig.message : null;

                this.toJSON = function () {
                    var jsonName = '"' + name + '"',
                        jsonEmail = '"' + email + '"',
                        jsonPhoneNumber = '"' + phoneNumber + '"',
                        jsonMessage = '"' + message + '"',
                        json = '{' +
                            '"name": ' + jsonName + ',' +
                            '"email": ' + jsonEmail + ',' +
                            '"phoneNumber": ' + jsonPhoneNumber + ',' +
                            '"message": ' + jsonMessage +
                        '}';
                    return json;
                };

                this.toUIObject = function () {
                    var UIObject = JSON.parse(this.toJSON());
                    return UIObject;
                };
            }
        }
});