const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        var updated_visits = parseInt(visits) + 1;
        client.set('visits', updated_visits);
        res.send('Number of visits is : ' + updated_visits);
    });
});

app.listen(8081, () => {
    console.log("listening on port 8081");
});