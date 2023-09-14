import { g } from "@graphabase/sdk"

import helloCustom from './modules/hello-custom'
  import scifi from './modules/sci-fi'

g.query('hello', {
  definition: {
    type: g.string(),
    args: {
      name: g.string().optional(),
      isImportant: g.boolean().optional(),
    },
  },
  resolver: 'hello',
})

g.modules([
  helloCustom,
  scifi,
])

export default g
