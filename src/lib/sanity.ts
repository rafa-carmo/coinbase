import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bnd7r43u',
  dataset: 'production',
  apiVersion: '2022-04-03',
  token:
    'skLYRFzZkOnSIWS8HGxGc9Lszlayom6orTQV4UAfbZ7WUtQg5mIWKjNMjji2Y02BFsJiUo7Rvt1p6Y0d6eCtImqwS238no0kLn6OugAA7mLPYo75B4cEhApU6daGwZNMYMSXmrWCEneSL8tYfQs4lGVnYPPQw5CsycrFibwEWdIjCwNrehmD',
  useCdn: false
})
