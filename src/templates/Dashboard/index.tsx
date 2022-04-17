import { ThirdwebSDK, TokenModule } from '@3rdweb/sdk'
import Header from 'components/Header'
import Portfolio from 'components/Portfolio'
import Promos from 'components/Promos'
import Sidebar from 'components/Sidebar/index'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { CoinsProps } from 'static/coins'
import { SanityTokensProps } from 'types/sanityTokens'

import * as S from './styles'

export type DashboardProps = {
  coins: CoinsProps
  walletAddress: string
  sanityTokens: SanityTokensProps[]
}

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY!,
    ethers.getDefaultProvider(process.env.NEXT_PUBLIC_RPC_URL!)
  )
)

function DashboardTemplate({
  coins,
  walletAddress,
  sanityTokens
}: DashboardProps) {
  const [thirdwebTokens, setThirdwebTokens] = useState<TokenModule[]>([])
  useEffect(() => {
    const getThirdwebTokens = () => {
      setThirdwebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      )
    }

    return getThirdwebTokens()
  }, [sanityTokens])

  return (
    <S.Wrapper>
      <Sidebar />

      <S.Main>
        <Header
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdwebTokens}
          walletAddress={walletAddress}
        />
        <S.MainContent>
          <Portfolio
            coins={coins}
            sanityTokens={sanityTokens}
            walletAddress={walletAddress}
            thirdwebTokens={thirdwebTokens}
          />
          <Promos />
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  )
}

export default DashboardTemplate
