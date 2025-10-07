import { version } from '../package.json'
import { $, Glob } from 'bun'
import path from 'path'

const glob = new Glob('packages/*/package.json')

for await (const file of glob.scan()) {
  const dir = path.dirname(file)

  await $`cd ${dir} && bun pm pkg set version="${version}"`
}
