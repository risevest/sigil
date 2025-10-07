import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpLine'
/**
 * Remix Icon: Arrow Up Line
 * @see {@link https://remixicon.com/icon/arrow-up-line Remix Icon Docs}
 */
export const ArrowUpLine = Icon
