import { useState } from 'react'
import { SanityTokensProps } from 'types/sanityTokens'

import CoinSelector from './CoinSelector'
import Receive from './Receive/index'
import * as S from './styles'
import Transfer, { TransferProps } from './Transfer'

export type TransferModalProps = {
  sanityTokens: SanityTokensProps[]
} & Pick<TransferProps, 'thirdWebTokens' | 'walletAddress'>

export type ActionProps = 'send' | 'receive' | 'select'

const TransferModal = ({
  sanityTokens,
  thirdWebTokens,
  walletAddress
}: TransferModalProps) => {
  const [actionState, setActionState] = useState<ActionProps>('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

  const changeAction = (action: ActionProps) => {
    if (action !== actionState) setActionState(action)
  }
  const changeToken = (action: SanityTokensProps) => {
    if (action !== selectedToken) setSelectedToken(action)
  }

  return (
    <S.Wrapper>
      <S.Selector>
        <S.Option
          selected={actionState === 'send'}
          onClick={() => setActionState('send')}
        >
          Send
        </S.Option>
        <S.Option
          selected={actionState === 'receive'}
          onClick={() => setActionState('receive')}
        >
          Receive
        </S.Option>
      </S.Selector>
      <S.ModalMain>
        {actionState === 'send' && (
          <Transfer
            setAction={changeAction}
            walletAddress={walletAddress}
            thirdWebTokens={thirdWebTokens}
            selectedToken={selectedToken}
          />
        )}
        {actionState === 'receive' && (
          <Receive
            setAction={changeAction}
            walletAddress={walletAddress}
            selectedToken={selectedToken}
          />
        )}

        {actionState === 'select' && (
          <CoinSelector
            setAction={setActionState}
            setToken={changeToken}
            sanityTokens={sanityTokens}
            thirdwebTokens={thirdWebTokens}
            walletAddress={walletAddress}
            selectedToken={selectedToken}
          />
        )}
      </S.ModalMain>
    </S.Wrapper>
  )
}

export default TransferModal
