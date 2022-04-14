import { TokenModule } from '@3rdweb/sdk'
import TransferModal from 'components/modal/TransferModal'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { SanityTokensProps } from 'types/sanityTokens'

import * as S from './styles'

export type HeaderProps = {
  title?: String
  walletAddress: string
  sanityTokens: SanityTokensProps[]
  thirdWebTokens: TokenModule[]
}

Modal.setAppElement('#__next')

const Header = ({
  title = 'Assets',
  walletAddress,
  sanityTokens,
  thirdWebTokens
}: HeaderProps) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: 0,
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)'
    }
  }
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ButtonContainer>
        <S.WalletLink>
          <S.WalletLinkTitle>Wallet Connected </S.WalletLinkTitle>
          <S.WalletAddress
            onClick={() => {
              navigator.clipboard.writeText(walletAddress)
            }}
          >
            {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
          </S.WalletAddress>
        </S.WalletLink>
        <S.Button background="primary">Buy / Sell</S.Button>
        <Link href={'/?transfer=1'}>
          <a>
            <S.Button>Send / Receive</S.Button>
          </a>
        </Link>
      </S.ButtonContainer>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </S.Wrapper>
  )
}

export default Header
