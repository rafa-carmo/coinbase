import QRCode from 'qrcode'
import { useRef, useEffect } from 'react'

import * as S from './styles'
export type QrCodeProps = {
  value?: string
}

const QrCode = ({ value = '' }: QrCodeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, value, (error) => {
      console.log(error)
    })
  }, [value])
  return (
    <S.Wrapper>
      <canvas ref={canvasRef}></canvas>
    </S.Wrapper>
  )
}

export default QrCode
