import type { ResolverProps } from '@graphabase/sdk'

export default async function Resolver({ args }: ResolverProps) {
  const { name = 'World', isImportant = false } = args 

  return `Hello ${name}${isImportant ? '!' : ''}`
}
