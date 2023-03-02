const readline = require( 'readline' ).createInterface({
	input: process.stdin,
	output: process.stdout
});

const ask = ( question ) => {
	return new Promise( ( resolve ) => {
		readline.question( question, answer => {
			resolve( answer )
			readline.close();
		});
	} )
}

const stopReadline = () => {
	readline.close();
}

module.exports = {
	ask,
	stopReadline
}