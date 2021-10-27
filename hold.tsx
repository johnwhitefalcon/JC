
import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 5000 });
console.log("Server listing on http://localhost:8000/");
for await (const request of server) {
 
    request.respond({ 
      body: new TextEncoder().encode("this is the test 5000 jc")
    });
  }
//--------------------------------------

import React from 'https://esm.sh/react'
import { useRouter } from 'https://deno.land/x/aleph/mod.ts'

export default function Page() {

  const { locale } = useRouter()

  return <h1>Hello :)</h1>

}

//--------------------------------------

import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  paths: async () => {
    const posts = await (await fetch('https://.../api/posts')).json()
    return posts.map(({ id }) => `/post/${id}`)
  }
}

export default function Post() {
  return (
    <div>...</div>
  )
}


//-----------------------------------------------------

import React from 'https://esm.sh/react'
import { useDeno, useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Post() {
  const { params } = useRouter()
  const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json()
  })

  return (
    <h1>{post.title}</h1>
  )
}

//-------------------------------------------























