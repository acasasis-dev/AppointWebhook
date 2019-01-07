app = require( "express" )()
bodyParser = require( "body-parser" )

app.use( bodyParser.json() )

app.get( "/webhook", ( req, res ) => {
	res.send( "Congrats, you hooked me" )
})

app.listen( 8000, () => {
	console.log( "Webhook now listening ..." )
})