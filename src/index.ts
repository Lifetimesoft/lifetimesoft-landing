import { buildPage } from './shell'
import * as s1 from './sections/s1-hero'
import * as s2 from './sections/s2-problem'
import * as s3 from './sections/s3-runtime'
import * as s4 from './sections/s4-run'
import * as s5 from './sections/s5-collab'
import * as s6 from './sections/s6-marketplace'
import * as s7 from './sections/s7-scale'
import * as s8 from './sections/s8-how'
import * as s9 from './sections/s9-architecture'
import * as s10 from './sections/s10-cta'

const html = buildPage([s1, s2, s3, s4, s5, s6, s7, s8, s9, s10])

export default {
  fetch(): Response {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    })
  },
} satisfies ExportedHandler
