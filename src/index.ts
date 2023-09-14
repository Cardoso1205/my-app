import { server } from "@graphabase/sdk"
import schema from "./graphql/schema"

server({
  schema,
})
