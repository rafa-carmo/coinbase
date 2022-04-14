import { TokenModule } from '@3rdweb/sdk'
import BalanceChart from 'components/BalanceChart'
import Coin from 'components/Coin'
import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CoinsProps } from 'static/coins'
import { SanityTokensProps } from 'types/sanityTokens'
import { formatValue } from 'utils/currency'

import * as S from './styles'

export type PortfolioProps = {
  coins: CoinsProps
  sanityTokens?: SanityTokensProps[]
  thirdwebTokens?: TokenModule[]
  walletAddress: string
}

const Portfolio = ({
  coins,
  sanityTokens = [],
  thirdwebTokens = [],
  walletAddress
}: PortfolioProps) => {
  const [totalBalance, setTotalBalance] = useState(0)

  const tokenToCash: { [key: string]: number } = {}
  for (const token of sanityTokens) {
    tokenToCash[token.contractAddress] = Number(token.usdPrice)
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      let total = 0
      for (const token of thirdwebTokens) {
        const balance = await token.balanceOf(walletAddress)
        total += Number(balance.displayValue) * tokenToCash[token.address]
      }

      setTotalBalance(Number(total))
    }
    calculateTotalBalance()
  })

  return (
    <S.Wrapper>
      <S.Content>
        <S.Chart>
          <S.Balance>
            <S.BalanceTitle>Balance</S.BalanceTitle>
          </S.Balance>
          <S.BalanceValue>
            {totalBalance === 0 ? '-' : formatValue(totalBalance)}
          </S.BalanceValue>
          <BalanceChart />
        </S.Chart>
        <S.TableItem>
          <S.Title>Your Assets</S.Title>
        </S.TableItem>
        <S.Divider />
        <S.Table>
          <S.TableItem>
            <S.TableRow>
              <S.TableRowItem flexSize={3}>Name</S.TableRowItem>
              <S.TableRowItem flexSize={2}>Balance</S.TableRowItem>
              <S.TableRowItem flexSize={1}>Price</S.TableRowItem>
              <S.TableRowItem flexSize={1}>Allocation</S.TableRowItem>
              <S.TableRowItem flexSize={0}>
                <BsThreeDotsVertical />
              </S.TableRowItem>
            </S.TableRow>
          </S.TableItem>
          <S.Divider />
          <div>
            {coins.map((coin) => (
              <Coin key={coin.name} {...coin} />
            ))}
          </div>
        </S.Table>
      </S.Content>
    </S.Wrapper>
  )
}

export default Portfolio
