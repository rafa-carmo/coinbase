import * as S from './styles'

export type TransferStatusProps = {
  status?: 'transferring' | 'complete' | 'error'
}

const TransferStatus = ({ status }: TransferStatusProps) => (
  <S.Wrapper>
    {status === 'transferring' && (
      <S.Transferring>
        Transfer in progress <S.LoaderSvg />
      </S.Transferring>
    )}
    {status === 'complete' && <S.Complete>Transference Complete</S.Complete>}
    {status === 'error' && (
      <S.Error>Something went wrong, please try again in some minutes.</S.Error>
    )}
  </S.Wrapper>
)

export default TransferStatus
