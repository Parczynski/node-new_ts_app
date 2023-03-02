import { dummyFunc } from './app'

describe( 'App test', () => {

	test( 'Func test', () => {

		const result = dummyFunc()

		expect( result ).toBe( 'App is started' )

	} )

} )