#!/usr/bin/env node


// Usage: npx new-ts-app [name]
  
const { mkdir, cp, writeFile } = require( 'fs' ).promises
const { write } = require('fs');
const path = require( 'path' )
const { ask, stopReadline } = require('./utils');




;( async () => {

	try{

		const source = path.resolve( process.cwd(), 'template' );
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
		
	} catch( err ) {
		console.error( err )
	} finally {
		stopReadline()
	}
	

})()