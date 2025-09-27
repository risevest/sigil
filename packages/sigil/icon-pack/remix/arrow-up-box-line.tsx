import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm7-12.657L6.343 12l1.414 1.414L11 10.172v7.485h2v-7.485l3.243 3.242L17.657 12z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpBoxLine'
/**
 * Remix Icon: Arrow Up Box Line
 * @see {@link https://remixicon.com/icon/arrow-up-box-line Remix Icon Docs}
 */
export const ArrowUpBoxLine = Icon
