import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm5 8h-1v-2h1v-1A3.5 3.5 0 0 1 15.75 8.69l-1.987.497a1.499 1.499 0 0 0-2.76.815v1h3v2h-3v2h5v2h-8v-2h1z" />
    </Svg>
  )
})
Icon.displayName = 'MoneyPoundBoxLine'
/**
 * Remix Icon: Money Pound Box Line
 * @see {@link https://remixicon.com/icon/money-pound-box-line Remix Icon Docs}
 */
export const MoneyPoundBoxLine = Icon
