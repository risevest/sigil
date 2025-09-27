import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 12 4-4v8z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDropLeftFill'
/**
 * Remix Icon: Arrow Drop Left Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-left-fill Remix Icon Docs}
 */
export const ArrowDropLeftFill = Icon
