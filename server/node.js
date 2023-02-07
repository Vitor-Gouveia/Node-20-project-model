import http from 'http'

const server = () => {
    const routes = {}
    const server = http.createServer()

    server.on("request", async (request, response) => {
        request.setEncoding('utf8');

        const requestURL = new URL(request.url, 'http://127.0.0.1/');

        const routeFunctionKey = `${request.method}${requestURL.pathname}`
        const routeFunction = routes[routeFunctionKey]
        
        if(!routeFunction) {
            response.statusCode = 404;
    
            return response.end("Não foi encontrada uma rota");
        }
    
        return await routeFunction(request, response, requestURL)
    })

    return {
        get(route, ...callbacks) {
            routes[`GET${route}`] = async (request, response, requestUrl) => {
                const customRequest = {}
                const customResponse = {
                    json: message => response.end(JSON.stringify(message))
                }
                const next = () => {}

                // callbacks.forEach(callback => {
                //     callback(customRequest, customResponse, () => {})
                // })

                const finalResponse = await callbacks
                    .reduce(async (responseAcc, callback) => {
                        return await callback(customRequest, (await responseAcc) || customResponse, next)
                    }, customResponse)

                return finalResponse
            }
        },
        listen(port, callback = () => {}) {
            server.listen(port, callback)
        }
    }
}

const app = server();

app.get("/", async (request, response) => {
    return response.json({
        hello: "world"
    })
})

app.listen(3333, () => console.log("listening"))

// Node.js v20
// ┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
// │ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
// ├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
// │ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.08 ms │ 10 ms │
// └─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
// ┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
// │ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
// ├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
// │ Req/Sec   │ 31631   │ 31631   │ 35839   │ 36671   │ 35458.81 │ 1095.29 │ 31616   │
// ├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
// │ Bytes/Sec │ 4.43 MB │ 4.43 MB │ 5.02 MB │ 5.13 MB │ 4.96 MB  │ 154 kB  │ 4.43 MB │
// └───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

// Req/Bytes counts sampled once per second.
// # of samples: 20

// 709k requests in 20.01s, 99.3 MB read

// Node.js v14
// ┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
// │ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
// ├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
// │ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.05 ms │ 7 ms │
// └─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
// ┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
// │ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
// ├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
// │ Req/Sec   │ 41791   │ 41791   │ 50175   │ 51359   │ 49907.2 │ 1980   │ 41771   │
// ├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
// │ Bytes/Sec │ 5.85 MB │ 5.85 MB │ 7.02 MB │ 7.19 MB │ 6.99 MB │ 278 kB │ 5.85 MB │
// └───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

// Req/Bytes counts sampled once per second.
// # of samples: 20

// 998k requests in 20.01s, 140 MB read