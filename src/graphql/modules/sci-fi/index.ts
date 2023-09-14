import { createModule } from "@graphabase/sdk"

const scifi = () => {
  const m = createModule('sci-fi')

  m.union('PeopleCharacterUnion', ['Person', 'Character'])

  m.query('findPersonAndCharacter', {
    definition: {
      type: m.list(m.union('PeopleCharacterUnion')).optional(),
    },
    resolver: 'person-character',
  })

  return m
}

export default scifi()