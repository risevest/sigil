import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 2h5v5H2zm0 15h5v5H2zM17 2h5v5h-5zm0 15h5v5h-5zM8 4h8v2H8zM4 8h2v8H4zm14 0h2v8h-2zM8 18h8v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'Shape2Fill'
/**
 * Remix Icon: Shape 2 Fill
 * @see {@link https://remixicon.com/icon/shape-2-fill Remix Icon Docs}
 */
export const Shape2Fill = Icon
