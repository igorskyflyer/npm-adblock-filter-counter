// Copyright: Igor Dimitrijević (@igorskyflyer)

import { type PathLike, readFileSync } from 'node:fs'

const ignored: string[] = ['!', '[']

/**
 * Counts ad-block filter rules found in the provided string.
 * @param rules The ad-block filter string to count rules in.
 * @returns Returns the number of filter rules.
 * @throws {TypeError}
 */
export function countRules(rules: string): number {
  if (typeof rules !== 'string') {
    throw new TypeError(
      `Expected a string for the input but got a ${typeof rules}.`
    )
  }

  const lines: string[] = rules.split(/\r?\n/gm)
  const linesCount: number = lines.length

  if (linesCount === 0) {
    return 0
  }

  let pointer: number = 0
  let count: number = 0

  while (pointer < linesCount) {
    const line: string = lines[pointer].trim()
    const start: string = line[0]

    if (start && !ignored.includes(start)) {
      count++
    }

    pointer++
  }

  return count
}

/**
 * Counts ad-block filter rules found in the provided file.
 * @param path The path to the file that contains the filter rules to count.
 * @returns Returns the number of filter rules.
 * @throws {Error}
 */
export function countFileRules(path: PathLike): number {
  try {
    const rules: string = readFileSync(path, { encoding: 'utf-8' })
    return countRules(rules)
  } catch {
    throw new Error('File could not be found.')
  }
}
