import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

import * as S from './styles'
import { DataProps, OptionsProps } from './types'

const BalanceChart = () => {
  const data: DataProps = {
    labels: [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Noz',
      'Dec',
      'Jan'
    ],
    datasets: [
      {
        fill: false,
        backgroundColor: '#3773f5',
        borderColor: '#3773f5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3773f5',
        pointBackgroundColor: '#3773f5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773f5',
        pointHoverBorderColor: '#3773f5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42]
      }
    ]
  }
  const options: OptionsProps = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  Chart.register(...registerables)
  return (
    <S.Wrapper>
      <Line data={data} options={options} width={400} />
    </S.Wrapper>
  )
}

export default BalanceChart
