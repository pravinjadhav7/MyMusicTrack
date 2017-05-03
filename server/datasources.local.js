module.exports = {
mongodb: {
url:'mongodb://admin:admin@ds129651.mlab.com:29651/musicapp',
connector: process.env.CONNECTOR || 'loopback-connector-mongodb' //https://docs.strongloop.com/display/public/LB/MongoDB+connector#MongoDBconnector-Replicasetconfiguration
}
};

//mongodb://<dbuser>:<dbpassword>@ds129651.mlab.com:29651/musicapp

//mongodb://localhost:27017/musicDB