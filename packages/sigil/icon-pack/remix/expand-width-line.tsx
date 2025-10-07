import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 18V6h2v12zM9.45 7.05 4.5 12l4.947 4.947 1.415-1.414L8.328 13h7.343l-2.535 2.535 1.414 1.414L19.5 12l-4.95-4.95-1.414 1.415L15.672 11H8.328l2.536-2.536zM20 6h2v12h-2z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandWidthLine'
/**
 * Remix Icon: Expand Width Line
 * @see {@link https://remixicon.com/icon/expand-width-line Remix Icon Docs}
 */
export const ExpandWidthLine = Icon
