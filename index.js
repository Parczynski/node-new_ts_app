#!/usr/bin/env node


// Usage: npx new-ts-app [name]
  
const { mkdir, cp, writeFile } = require( 'fs' ).promises
const { write } = require('fs');
const path = require( 'path' )
const { ask, stopReadline } = require('./utils');




;( async () => {

	try{

		const source = path.resolve( __dirname, 'template' );
		const package = require( path.join( source, 'package.json' ) )

		package.name = typeof process.argv[2] === 'undefined'
			? await ask( 'Project name: ' )
			: process.argv[2]

		
		const target = path.resolve( process.cwd(), package.name );


		// Create project directory
		await mkdir( target, { recursive: true } )


		// Copy template to the target
		await cp( source, target, { recursive: true } );


		// Write project info
		await writeFile( path.join( target, 'package.json' ), JSON.stringify( package, null, 2 ) )

		console.log( 'The project is initialized.' )
		console.log( 'Next steps:' )
		console.log( `\tcd ${package.name}` )
		console.log( `\tnpm i` )
		console.log( `\tnpm run dev`)

		const currentPackage = require( './package.json' )
		console.log( '' )
		console.log( `More info at ${currentPackage.homepage}`)
		
	} catch( err ) {
		console.error( err )
	} finally {
		stopReadline()
	}
	

})()