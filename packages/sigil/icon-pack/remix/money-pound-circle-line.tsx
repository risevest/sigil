import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3-7h-1v-2h1v-1A3.5 3.5 0 0 1 15.75 8.69l-1.987.497a1.499 1.499 0 0 0-2.76.815v1h3v2h-3v2h5v2h-8v-2h1z" />
    </Svg>
  )
})
Icon.displayName = 'MoneyPoundCircleLine'
/**
 * Remix Icon: Money Pound Circle Line
 * @see {@link https://remixicon.com/icon/money-pound-circle-line Remix Icon Docs}
 */
export const MoneyPoundCircleLine = Icon
