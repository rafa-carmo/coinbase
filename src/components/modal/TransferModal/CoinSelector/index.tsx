import { TokenModule } from '@3rdweb/sdk'
import { useState, useEffect } from 'react'
import { SanityTokensProps } from 'types/sanityTokens'

import CoinItem from '../CoinItem/index'
import * as S from './styles'

import { ActionProps } from '..'

export type CoinSelectorProps = {
  setAction: (action: ActionProps) => void
  setToken: (action: SanityTokensProps) => void
  sanityTokens: SanityTokensProps[]
  selectedToken: SanityTokensProps
  thirdwebTokens: TokenModule[]
  walletAddress: string
}

const CoinSelector = ({
  walletAddress,
  sanityTokens,
  selectedToken,
  setAction,
  setToken,
  thirdwebTokens
}: CoinSelectorProps) => {
  return (
    <S.Wrapper>
      <S.Title>Select Asset</S.Title>
      <S.CoinList>
        {sanityTokens.map((token, index) => (
          <CoinItem
            key={token.symbol}
            token={token}
            setToken={setToken}
            setAction={setAction}
            sanityTokens={sanityTokens}
            selectedToken={selectedToken}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
          />
        ))}
      </S.CoinList>
    </S.Wrapper>
  )
}

export default CoinSelector
