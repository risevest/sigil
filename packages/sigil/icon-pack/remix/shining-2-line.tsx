import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 8 7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8l4-7.5zm3.25 4-4.728-2.522L12 4.75 9.478 9.478 4.75 12l4.728 2.522L12 19.25l2.522-4.728z" />
    </Svg>
  )
})
Icon.displayName = 'Shining2Line'
/**
 * Remix Icon: Shining 2 Line
 * @see {@link https://remixicon.com/icon/shining-2-line Remix Icon Docs}
 */
export const Shining2Line = Icon
