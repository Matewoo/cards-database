import Sentry from '@sentry/node'
import express from 'express'
import jsonEndpoints from './V2/endpoints/jsonEndpoints'
import graphql from './V2/graphql'
import status from './status'

// Current API version
const VERSION = 2

// Init Express server
const server = express()

// allow to catch servers errors
const sentryDSN = process.env.SENTRY_DSN

if (sentryDSN) {
	Sentry.init({ dsn: sentryDSN})

	server.use(Sentry.Handlers.requestHandler())
}

// Route logging / Error logging for debugging
server.use((req, res, next) => {
	const now = new Date()
	//                   Date of request              User-Agent 32 first chars                                     request Method
	let prefix = `\x1b[2m${now.toISOString()}\x1b[22m ${req.headers['user-agent']?.slice(0, 32).padEnd(32)} ${req.method.toUpperCase().padEnd(7)}`

	const url = new URL(req.url, `http://${req.headers.host}`)
	const fullURL = url.toString()
	const path = fullURL.slice(fullURL.indexOf(url.pathname, fullURL.indexOf(url.host)))

	//                        HTTP Status Code     Time to run request   path of request
	console.log(`${prefix} ${''.padStart(5, ' ')} ${''.padStart(7, ' ')} ${path}`)

	res.on('close', () => {
		console.log(`${prefix} \x1b[34m[${'statusCode' in res ? res.statusCode : '???'}]\x1b[0m \x1b[2m${(new Date().getTime() - now.getTime()).toFixed(0).padStart(5, ' ')}ms\x1b[22m ${path}`)
	})
	res.on('error', (err) => {
		// log the request
		console.log(`${prefix} \x1b[34m[500]\x1b[0m \x1b[2m${(new Date().getTime() - now.getTime()).toFixed(0).padStart(5, ' ')}ms\x1b[22m ${path}`)

		// add a full line dash to not miss it
		const columns = (process?.stdout?.columns ?? 32) - 7
		const dashes = ''.padEnd(columns / 2, '-')

		// colorize the lines to make sur to not miss it
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
		console.error(err)
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
	})

	next()
})

// Set CORS global headers
server.use((req, res, next) => {
	res
		.setHeader('Access-Control-Allow-Origin', '*')
		.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
		.setHeader('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range')
		.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range')

	if (req.method.toUpperCase() === 'OPTIONS') {
		res.status(200).send('ok')
		return
	}
	next()
})

server.get('/', (_, res) => {
	res.redirect('https://www.tcgdex.dev/?ref=api.tccgdex.net')
})

server.use(express.static('./public'))

// Setup GraphQL
server.use(`/v${VERSION}/graphql`, graphql)

// Setup JSON endpoints
server.use(`/v${VERSION}`, jsonEndpoints)

// Status page
server.use('/status', status)

if (sentryDSN) {
	server.use(Sentry.Handlers.errorHandler())
}

// Start server
server.listen(3000)
console.log(`🚀 Server ready at localhost:3000`);
