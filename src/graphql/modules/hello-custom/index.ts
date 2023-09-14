import { createModule } from "@graphabase/sdk"

const helloCustom = () => {
  const m = createModule('hello-custom')
  
  m.input('MyCustomInput', {
    fields: {
      name: m.string().optional(),
      isImportant: m.boolean().optional(),
    },
  })

  m.query('helloCustom', {
    definition: {
      type: m.string(),
      args: {
        input: m.input('MyCustomInput').optional(),
      },
    },
    resolver: 'hello',
  })

  return m
}

export default helloCustom()
