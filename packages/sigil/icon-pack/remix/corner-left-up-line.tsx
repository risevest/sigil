import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 19h9v-2h-7V6.828l3.95 3.95 1.414-1.414L11 3 4.636 9.364l1.414 1.414L10 6.828z" />
    </Svg>
  )
})
Icon.displayName = 'CornerLeftUpLine'
/**
 * Remix Icon: Corner Left Up Line
 * @see {@link https://remixicon.com/icon/corner-left-up-line Remix Icon Docs}
 */
export const CornerLeftUpLine = Icon
