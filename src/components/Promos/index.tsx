import * as S from './styles'

export type PromosProps = {}

const Promos = ({}: PromosProps) => (
  <S.Wrapper>
    <S.OfferCard>
      <S.Title>Yield earned</S.Title>
      <S.Description>Earn up to 2.84% APY on your crypto</S.Description>
      <S.Placeholder />
      <S.Additional>
        $0.000066 <span>2.84% APY</span>
      </S.Additional>
    </S.OfferCard>

    <S.OfferCard>
      <S.Title>Learn and Earned</S.Title>
      <S.Description>Earn up CO 2.84% APY on your crypto</S.Description>
      <S.Placeholder />
      <S.Additional>Verify Identity</S.Additional>
    </S.OfferCard>
  </S.Wrapper>
)

export default Promos
