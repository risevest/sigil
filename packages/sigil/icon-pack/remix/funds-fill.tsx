import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3.901 17.864 3.911-3.911 2.829 2.828 4.571-4.571 1.793 1.793v-5h-5l1.793 1.793-3.157 3.157-2.829-2.829-4.945 4.946a10 10 0 0 1-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a9.99 9.99 0 0 1-8.104-4.14" />
    </Svg>
  )
})
Icon.displayName = 'FundsFill'
/**
 * Remix Icon: Funds Fill
 * @see {@link https://remixicon.com/icon/funds-fill Remix Icon Docs}
 */
export const FundsFill = Icon
