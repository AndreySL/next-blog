import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
  projectId: 'jagzw4g8',
  dataset: 'production',
}

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: '2023-02-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
