import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3h6v18H3v-6h4v-4h4V7h4z" />
    </Svg>
  )
})
Icon.displayName = 'StairsFill'
/**
 * Remix Icon: Stairs Fill
 * @see {@link https://remixicon.com/icon/stairs-fill Remix Icon Docs}
 */
export const StairsFill = Icon
