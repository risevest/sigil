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
          d="M6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10.5-3A4.5 4.5 0 0 0 11 8.5v7a4.5 4.5 0 0 0 4.5 4.5h1a4.5 4.5 0 0 0 4.5-4.5V15a1 1 0 1 0-2 0v.5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 15.5 6h1A2.5 2.5 0 0 1 19 8.5V9a1 1 0 1 0 2 0v-.5A4.5 4.5 0 0 0 16.5 4z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CelsiusLine'
/**
 * MingCute Icon: Celsius Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CelsiusLine = Icon
