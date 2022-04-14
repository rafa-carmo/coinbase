export type SanityTokensProps = {
  contractAddress: string
  logo: Logo
  name: string
  symbol: string
  usdPrice: string
}

type Logo = {
  _type: string
  asset: Asset
}

type Asset = {
  _ref: string
  _type: string
}
