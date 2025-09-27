import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 14-4-4h8z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDropDownFill'
/**
 * Remix Icon: Arrow Drop Down Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-down-fill Remix Icon Docs}
 */
export const ArrowDropDownFill = Icon
