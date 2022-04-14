import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from 'static/coins'
import { formatValue } from 'utils/currency'

import * as S from './styles'

export type CoinProps = typeof coins[0]

const Coin = ({
  name,
  logo,
  sign,
  balanceUsd,
  balanceCoin,
  priceUsd,
  change,
  allocation
}: CoinProps) => (
  <S.Wrapper>
    <div>
      <S.Column flexSize={3}>
        <S.NameColumn>
          <S.CoinIcon>
            <Image width={50} height={50} src={logo} alt={name} />
          </S.CoinIcon>
          <div>
            <S.Primary>{name}</S.Primary>
            <S.Secondary>{sign}</S.Secondary>
          </div>
        </S.NameColumn>
      </S.Column>

      <S.Column flexSize={2}>
        <div>
          <S.Primary>{formatValue(balanceUsd)}</S.Primary>
          <S.Secondary>
            {balanceCoin} {sign}
          </S.Secondary>
        </div>
      </S.Column>
      <S.Column flexSize={1}>
        <S.Primary>{formatValue(priceUsd)}</S.Primary>
        <S.CoinBallance coinBallance={change}>
          {change > 0 && '+'}
          {change}%
        </S.CoinBallance>
      </S.Column>

      <S.Column flexSize={1}>{allocation}%</S.Column>
      <S.Column flexSize={0}>
        <BsThreeDotsVertical />
      </S.Column>
    </div>
  </S.Wrapper>
)

export default Coin
