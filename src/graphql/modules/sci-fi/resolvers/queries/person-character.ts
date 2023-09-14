import type { ResolverProps } from '@graphabase/sdk'
import { client, PersonGenqlSelection, CharacterGenqlSelection } from '@graphabase/client'

export default async function Resolver({ operation }: ResolverProps) {
  const selectionSet = operation.selectionSet.typed
  const personSelection = selectionSet.on_Person as PersonGenqlSelection
  const characterSelection = selectionSet.on_Character as CharacterGenqlSelection

  const { swapi: { allPeople }, rick_morty: { characters } } = await client.query({
    swapi: {
      allPeople: {
        __args: {
          first: 5,
        },
        people: {
          __typename: true,
          ...personSelection,
        }
      },
    },
    rick_morty: {
      characters: {
        results: {
          __typename: true,
          ...characterSelection,
        }
      },
    },
  })

  const people = allPeople?.people ?? []
  const characters_results = characters?.results ?? []

  return [...people, ...characters_results]
}
