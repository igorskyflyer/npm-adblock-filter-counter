import { assert, describe, test } from 'vitest'
import { countFileRules, countRules } from '../src/index.mjs'

const rules: string = `
! {@0.1} Block these subdomains
||ureca.samsungapps.com^
||projectagora-d.openx.net^
||analytics.query.yahoo.com^
||ads-api.tiktok.com^
||advertising.yahoo.com^
||adtech.yahooinc.com^
||samsungnewsapi.picks.my^
||t.imgur.com^
! {/@0.1}

! {@1} Block these specific endpoints - global
/cdn-cgi/trace^
/page-view-metadata^
/infinityid/beacon^
`

describe('🧪 adblock-filter-counter tests 🧪', () => {
  test('#1 should return 10', () => {
    assert.equal(countRules(rules), 11)
  }) // #1

  test('#2 should return 1609', () => {
    assert.equal(countFileRules('./test/data/ads.txt'), 1609)
  }) // #2
})
