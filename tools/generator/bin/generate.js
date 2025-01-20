#!/usr/bin/env node
const name = process.argv[2]

process.stdout.write(`export const ${name} = '${name.toLowerCase()}'`)
