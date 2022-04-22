// const redis  =require('redis');
const axios = require('axios');

// const REDIS_SOCKET = {
//     host: '',
//     port: 6379,
// };
//
// async function getProds() {
//     const clientRedis = redis.createClient({
//         socket: REDIS_SOCKET
//     });
//
//     await clientRedis.connect();
//
//     const iterator = clientRedis.scanIterator({
//         MATCH: 'product:*',
//         COUNT: 5,
//     });
//
//     let result = '';
//     let count = 0;
//
//     setInterval(() => {
//         console.log(count);
//     }, 5000);
//
//     for await (const key of iterator) {
//         result += `${key}\n`;
//         console.log(result);
//         count++;
//     }
//
//     console.log(result);
//
//     // fs.writeFileSync('productKeys', result);
//
//     await clientRedis.disconnect();
// }
//
// getProds().catch(console.log);

(async () => {
    const url = '';
    const data = {
        "action": "product.updated",
        "data": {
            "resource": {
                "identifier": "931980513",
            }
        }
    };
    const headers = {
        'apiKey': '',
    };

    let response = await axios.post(url, data, { headers })
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('error');
            console.log(error);
        });

    console.log('response');
    console.log(response);
})();

























