#!/usr/bin/env node

const fs = require( 'fs' )
const path = require( 'path' )

// Usage: npx create-ts-app [name]

const projectName = process.argv[2];


const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });