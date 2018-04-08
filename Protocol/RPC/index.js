const zerorpc = require("zerorpc");

const client = new zerorpc.Client();
client.connect("tcp://172.20.20.207:4242");

client.invoke('get_test_data', 90153882, 16545, function(error, res, more) {
    console.log(res);
});