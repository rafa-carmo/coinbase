import { BubbleDataPoint, ChartData, ScatterDataPoint } from 'chart.js'
import {
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  LineControllerChartOptions,
  PluginChartOptions,
  ScaleChartOptions
} from 'chart.js'
import { _DeepPartialObject } from 'chart.js/types/utils'

export type DataProps = ChartData<
  'line',
  (number | ScatterDataPoint | BubbleDataPoint)[],
  unknown
>

export type OptionsProps =
  | _DeepPartialObject<
      CoreChartOptions<'line'> &
        ElementChartOptions<'line'> &
        PluginChartOptions<'line'> &
        DatasetChartOptions<'line'> &
        ScaleChartOptions &
        LineControllerChartOptions
    >
  | undefined
