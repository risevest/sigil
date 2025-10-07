import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6M5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6M9 4h6v2H9zm0 14h6v2H9zM4 9h2v6H4zm14 0h2v6h-2z" />
    </Svg>
  )
})
Icon.displayName = 'ShapeFill'
/**
 * Remix Icon: Shape Fill
 * @see {@link https://remixicon.com/icon/shape-fill Remix Icon Docs}
 */
export const ShapeFill = Icon
