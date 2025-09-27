import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 19H5v-2h7V6.828l-3.95 3.95-1.414-1.414L13 3l6.364 6.364-1.414 1.414L14 6.828z" />
    </Svg>
  )
})
Icon.displayName = 'CornerRightUpLine'
/**
 * Remix Icon: Corner Right Up Line
 * @see {@link https://remixicon.com/icon/corner-right-up-line Remix Icon Docs}
 */
export const CornerRightUpLine = Icon
