import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 10v9h-2v-7h-6.172l3.95 3.95-1.414 1.414L8 11l6.364-6.364 1.414 1.414-3.95 3.95zM8.75 4.636l1.414 1.414L5.214 11l4.95 4.95-1.414 1.414L2.386 11z" />
    </Svg>
  )
})
Icon.displayName = 'CornerUpLeftDoubleLine'
/**
 * Remix Icon: Corner Up Left Double Line
 * @see {@link https://remixicon.com/icon/corner-up-left-double-line Remix Icon Docs}
 */
export const CornerUpLeftDoubleLine = Icon
