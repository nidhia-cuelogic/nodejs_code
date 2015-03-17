var http = require('http'),
    mailchimp = require('mailchimp');

http.createServer(function (req, res) {
    console.log('hello');

    var MailChimpAPI = require('mailchimp').MailChimpAPI;

    /*var api_key = '1f69a09b32a5ee359c14aee68f11f6a7-us10',
        list_id = '55afcb063f';*/
    // BTG dev API key: 81f3ec97c6f5f5772546e10da55c70c8-us10
    // BTG dev id: 42af135bdf
    // BTG dev u: 1eb3594f6718690c9d3b0da01
    var api_key = '81f3ec97c6f5f5772546e10da55c70c8-us10',
        list_id = '42af135bdf';

    try {
        var api = new MailChimpAPI(api_key, {
            version: '2.0'
        });
    } catch (error) {
        console.log(error.message);
    }


    api.call('lists', 'list', {
        apikey: api_key
    }, function (err, res) {
        if (err) {
            console.log(err);
        } else if (res) {
            var list_id = res.data[0].id;
            // lists/subscribe (string apikey, string id, struct email, struct merge_vars, string email_type, bool double_optin, bool update_existing, bool replace_interests, bool send_welcome)
            api.call('lists', 'subscribe', {
                apikey: api_key,
                id: list_id,
                email: {
                    // email: 'tusharj.cuelogic@gmail.com'
                    email: 'nidhi.arya@cuelogic.co.in'
                },
                merge_vars: {
                    FNAME: 'Tushar',
                    LNAME: 'Jadhav'
                },
                double_optin: false,
                send_welcome: true
            }, function (error, data) {
                if (error) {
                    console.log(error.message);
                } else {
                    console.log(JSON.stringify(data)); // Do something with your data!
                }
            });
        }
    })

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(1337, 'localhost');
