import imageUrlBuilder from '@sanity/image-url'
import QrCode from 'components/QrCode'
import { client } from 'lib/sanity'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { BiCopy } from 'react-icons/bi'

import { ActionProps } from '..'

import { FaCheck } from 'react-icons/fa'
import { SanityTokensProps } from 'types/sanityTokens'

import * as S from './styles'

export type ReceiveProps = {
  selectedToken: SanityTokensProps
  setAction: (action: ActionProps) => void
  walletAddress: string
}

const Receive = ({ selectedToken, setAction, walletAddress }: ReceiveProps) => {
  const [imageUrl, setImageUrl] = useState<string>()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url()
    setImageUrl(url)
  }, [selectedToken])

  return (
    <S.Wrapper>
      <S.Content>
        <S.QRContainer>
          <S.Image>
            <QrCode value={walletAddress} />
          </S.Image>
        </S.QRContainer>
        <S.Divider />
        <S.Row>
          <S.CoinSelectList>
            <S.Icon>
              {imageUrl && (
                <Image
                  width={50}
                  height={50}
                  src={imageUrl}
                  alt={selectedToken.name}
                />
              )}
            </S.Icon>
            <S.CoinName>{selectedToken.name}</S.CoinName>
          </S.CoinSelectList>
        </S.Row>
        <S.Divider />
        <S.Row>
          <div>
            <S.Title>{selectedToken.symbol} Address</S.Title>
            <S.Address>{walletAddress}</S.Address>
          </div>
          <S.CopyButton
            onClick={() => {
              navigator.clipboard.writeText(walletAddress)
              setCopied(true)
            }}
          >
            {copied ? <FaCheck color="#27ad75" /> : <BiCopy />}
          </S.CopyButton>
        </S.Row>
      </S.Content>
    </S.Wrapper>
  )
}

export default Receive
