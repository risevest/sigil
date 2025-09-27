import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 5H5v2h7v10.172l-3.95-3.95-1.414 1.414L13 21l6.364-6.364-1.414-1.414-3.95 3.95z" />
    </Svg>
  )
})
Icon.displayName = 'CornerRightDownLine'
/**
 * Remix Icon: Corner Right Down Line
 * @see {@link https://remixicon.com/icon/corner-right-down-line Remix Icon Docs}
 */
export const CornerRightDownLine = Icon
