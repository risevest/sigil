import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2 2a1 1 0 0 1 .877.519l.051.11L12.278 10H13.5V7a1 1 0 0 1 1.993-.117L15.5 7v3h.5a1 1 0 0 1 .117 1.993L16 12h-.5v1h.5a1 1 0 0 1 .117 1.993L16 15h-.5v2a1 1 0 0 1-.883.993L14.5 18H14a1 1 0 0 1-.877-.519l-.051-.11L12.123 15H10.5v2a1 1 0 0 1-1.993.117L8.5 17v-2H8a1 1 0 0 1-.117-1.993L8 13h.5v-1H8a1 1 0 0 1-.117-1.993L8 10h.5V7a1 1 0 0 1 .883-.993L9.5 6zm.923 6H10.5v1h.823zm2.577 0h-.423l.4 1h.023z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CurrencyNigeriaLine'
/**
 * MingCute Icon: Currency Nigeria Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyNigeriaLine = Icon
