import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 1c1.018 0 1.985.217 2.858.608L13.295 7.17a5 5 0 0 0-4.83 8.366L7.05 16.95l-.156-.161A7 7 0 0 1 12 5m6.392 4.143c.39.872.608 1.84.608 2.857a6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414a5.008 5.008 0 0 0 1.295-4.83zm-2.15-2.8 1.415 1.414-3.725 3.726A2.003 2.003 0 0 1 12 14a2 2 0 1 1 .517-3.932z" />
    </Svg>
  )
})
Icon.displayName = 'Dashboard2Line'
/**
 * Remix Icon: Dashboard 2 Line
 * @see {@link https://remixicon.com/icon/dashboard-2-line Remix Icon Docs}
 */
export const Dashboard2Line = Icon
