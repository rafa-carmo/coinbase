import { coins } from 'static/coins'
import HomeTemplate, { HomeProps } from 'templates/Home/index'
import { getPercentage } from 'utils/percentage'

function index({ ...props }: HomeProps) {
  return <HomeTemplate {...props} />
}

export default index

export async function getServerSideProps() {
  const data = await Promise.all(
    coins.map(async (coin) => ({
      values: await (
        await fetch(`https://www.mercadobitcoin.net/api/${coin.sign}/ticker/`)
      ).json(),
      ...coin
    }))
  )

  const resSanityTokens = await fetch(
    `https://bnd7r43u.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D`
  )
  const sanityTokens = (await resSanityTokens.json()).result

  return {
    props: {
      dashboard: {
        sanityTokens: sanityTokens,
        coins: data.map((item) => ({
          name: item.name,
          sign: item.sign,
          logo: item.logo,
          balanceUsd: item.balanceUsd,
          balanceCoin: item.balanceCoin,
          priceUsd: parseFloat(item.values.ticker.last),
          change: getPercentage(
            parseFloat(item.values.ticker.open),
            parseFloat(item.values.ticker.last)
          ),
          allocation: item.allocation
        }))
      }
    }
  }
}
