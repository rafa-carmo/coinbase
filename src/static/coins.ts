export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: '/assets/btc.png',
    balanceUsd: 230.32,
    balanceCoin: 6.35667736,
    priceUsd: 21573897.53,
    change: -4.74,
    allocation: 41.89
  },
  {
    name: 'Solana',
    sign: 'CRV',
    logo: '/assets/sol.png',
    balanceUsd: 120.2,
    balanceCoin: 6.35667736,
    priceUsd: 5.32,
    change: 4.74,
    allocation: 41.89
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: '/assets/matic.png',
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: '/assets/eth.png',
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: 6.24,
    allocation: 17.89
  },
  {
    name: 'Terra',
    sign: 'WLUNA',
    logo: '/assets/luna.png',
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89
  },
  {
    name: 'Dogecoin 🌙',
    sign: 'DOGE',
    logo: '/assets/doge.png',
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: 200.24,
    allocation: 17.89
  }
]

export type CoinsProps = typeof coins
