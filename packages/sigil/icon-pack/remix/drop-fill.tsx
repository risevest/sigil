import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.636 6.633 12 .269l6.364 6.364a9 9 0 1 1-12.728 0" />
    </Svg>
  )
})
Icon.displayName = 'DropFill'
/**
 * Remix Icon: Drop Fill
 * @see {@link https://remixicon.com/icon/drop-fill Remix Icon Docs}
 */
export const DropFill = Icon
