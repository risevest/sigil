import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4h12v2h-9v6h8v2h-8v7H7z" />
    </Svg>
  )
})
Icon.displayName = 'FontSans'
/**
 * Remix Icon: Font Sans
 * @see {@link https://remixicon.com/icon/font-sans Remix Icon Docs}
 */
export const FontSans = Icon
