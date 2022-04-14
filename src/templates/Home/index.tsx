import { useWeb3 } from '@3rdweb/hooks'
import ConnectWallet from 'components/ConnectWallet/index'
import DashboardTemplate, { DashboardProps } from 'templates/Dashboard'

import * as S from './styles'

export type HomeProps = {
  dashboard: DashboardProps
}

function HomeTemplate({ dashboard }: HomeProps) {
  const { address } = useWeb3()
  return (
    <S.Wrapper>
      {address ? (
        <DashboardTemplate {...dashboard} walletAddress={address} />
      ) : (
        <ConnectWallet />
      )}
    </S.Wrapper>
  )
}

export default HomeTemplate
