import { TokenModule } from '@3rdweb/sdk'
import imageUrlBuilder from '@sanity/image-url'
import { client } from 'lib/sanity'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { SanityTokensProps } from 'types/sanityTokens'

import { CoinSelectorProps } from '../CoinSelector'
import * as S from './styles'

export type CoinItemProps = {
  token: SanityTokensProps
} & Pick<
  CoinSelectorProps,
  | 'sanityTokens'
  | 'selectedToken'
  | 'thirdwebTokens'
  | 'walletAddress'
  | 'setToken'
  | 'setAction'
>

const CoinItem = ({
  setToken,
  setAction,
  token,
  sanityTokens,
  selectedToken,
  thirdwebTokens,
  walletAddress
}: CoinItemProps) => {
  const [activeThirdwebToken, setActiveThirdwebToken] = useState<TokenModule>()
  const [balance, setBalance] = useState<string>()
  const [imageUrl, setImageUrl] = useState<string>()
  useEffect(() => {
    const getBalance = async () => {
      thirdwebTokens.map((thirdwebToken) => {
        if (thirdwebToken.address === token.contractAddress) {
          setActiveThirdwebToken(thirdwebToken)
        }
      })

      const balance = await activeThirdwebToken?.balanceOf(walletAddress)
      return await setBalance(balance?.displayValue)
    }
    const getImageUrl = async () => {
      const imgUrl = imageUrlBuilder(client).image(token.logo).url()
      setImageUrl(imgUrl)
    }
    getBalance()
    getImageUrl()
  }, [
    thirdwebTokens,
    balance,
    imageUrl,
    activeThirdwebToken,
    token,
    walletAddress
  ])
  // console.log(imageUrl)
  return (
    <S.Wrapper
      selected={selectedToken.contractAddress === token.contractAddress}
      onClick={() => {
        setToken(token)
        setAction('send')
      }}
    >
      <S.Main>
        <S.Icon>
          {imageUrl && (
            <Image width={50} height={50} src={imageUrl} alt={token.name} />
          )}
        </S.Icon>
        <S.NameDetails>
          <S.Name>{token.name}</S.Name>
          <S.Symbol>{token.symbol}</S.Symbol>
        </S.NameDetails>
      </S.Main>
      <S.Balance>
        {balance} {token.symbol}
      </S.Balance>
      <S.IsSelected>
        {selectedToken.contractAddress === token.contractAddress && <FaCheck />}
      </S.IsSelected>
    </S.Wrapper>
  )
}

export default CoinItem
