import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 6v12h2V6zm7.45 1.05L4.5 12l4.947 4.947L9.448 13h5.102v3.95L19.5 12l-4.95-4.95V11H9.45zM20 6h2v12h-2z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandWidthFill'
/**
 * Remix Icon: Expand Width Fill
 * @see {@link https://remixicon.com/icon/expand-width-fill Remix Icon Docs}
 */
export const ExpandWidthFill = Icon
