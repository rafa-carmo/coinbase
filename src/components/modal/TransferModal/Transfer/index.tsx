import { TokenModule } from '@3rdweb/sdk'
import imageUrlBuilder from '@sanity/image-url'
import { client } from 'lib/sanity'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaWallet } from 'react-icons/fa'
import { SanityTokensProps } from 'types/sanityTokens'
import { sleep } from 'utils/timer'

import { ActionProps } from '..'

import TransferStatus from '../TransferStatus/index'
import * as S from './styles'

export type TransferProps = {
  selectedToken: SanityTokensProps
  setAction: (action: ActionProps) => void
  thirdWebTokens: TokenModule[]
  walletAddress: string
}

const Transfer = ({
  selectedToken,
  thirdWebTokens,
  walletAddress,
  setAction
}: TransferProps) => {
  const [amount, setAmount] = useState<undefined | string>()
  const [recipient, setRecipient] = useState<string | null>()
  const [logoUrl, setLogoUrl] = useState('')
  const [activeThirdwebToken, setActiveThirdwebToken] = useState<TokenModule>()
  const [ballance, setBallance] = useState('')

  const [transfer, setTransfer] = useState<
    'transferring' | 'complete' | 'error' | undefined
  >()

  useEffect(() => {
    const activeToken = thirdWebTokens.find(
      (token) => token.address === selectedToken.contractAddress
    )
    setActiveThirdwebToken(activeToken)
  }, [thirdWebTokens, selectedToken])

  useEffect(() => {
    setLogoUrl(imageUrlBuilder(client).image(selectedToken.logo).url())
  }, [selectedToken])

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdwebToken?.balanceOf(walletAddress)
      setBallance(`${balance?.displayValue}`)
    }
    if (activeThirdwebToken) {
      getBalance()
    }
  }, [activeThirdwebToken, walletAddress])

  const sendToken = async (amount: string, recipient: string) => {
    if (activeThirdwebToken && amount && recipient) {
      setTransfer('transferring')
      const transaction = await activeThirdwebToken
        .transfer(recipient, amount.toString().concat('000000000000000000'))
        .catch(async (_) => {
          setTransfer('error')
          await sleep(5000)
          setTransfer(undefined)
        })
      setTransfer('complete')
      await sleep(5000)
      setTransfer(undefined)
    } else {
      console.log('missing data')
    }
  }

  return (
    <S.Wrapper>
      {transfer ? (
        <TransferStatus status={transfer} />
      ) : (
        <>
          <S.Amount>
            <S.FlexInputContainer>
              <S.FlexInput
                placeholder="0"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span>{selectedToken.symbol}</span>
            </S.FlexInputContainer>
            <S.Warning hiddenText={amount ? true : false}>
              Amount is a require field.
            </S.Warning>
            {/* <S.Divider /> */}
          </S.Amount>
          <S.TransferForm>
            <S.Row>
              <S.FieldName>To</S.FieldName>
              <S.Icon>
                <FaWallet />
              </S.Icon>
              <S.Recipient
                placeholder="Address"
                value={recipient ? recipient : ''}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </S.Row>
            <S.Divider />
            <S.Row>
              <S.FieldName>Pay with</S.FieldName>
              <S.CoinSelectList onClick={() => setAction('select')}>
                <S.Icon>
                  {logoUrl && (
                    <Image width={50} height={50} src={logoUrl} alt="image" />
                  )}
                </S.Icon>
                <S.CoinName>{selectedToken.name}</S.CoinName>
              </S.CoinSelectList>
            </S.Row>
          </S.TransferForm>
        </>
      )}
      <S.Row>
        <S.Continue
          onClick={() => sendToken(amount!, recipient!)}
          disabled={!!transfer}
        >
          Continue
        </S.Continue>
      </S.Row>

      <S.Row>
        <S.BalanceTitle>{selectedToken.symbol} Ballance</S.BalanceTitle>
        <S.Balance>
          {ballance} {selectedToken.symbol}
        </S.Balance>
      </S.Row>
    </S.Wrapper>
  )
}

export default Transfer
