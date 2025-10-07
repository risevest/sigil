import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1-7h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 7.88l1.415-1.414 2.12 2.122 2.122-2.122 1.414 1.414-2.12 2.122h2.585v2h-3z" />
    </Svg>
  )
})
Icon.displayName = 'MoneyCnyCircleLine'
/**
 * Remix Icon: Money Cny Circle Line
 * @see {@link https://remixicon.com/icon/money-cny-circle-line Remix Icon Docs}
 */
export const MoneyCnyCircleLine = Icon
