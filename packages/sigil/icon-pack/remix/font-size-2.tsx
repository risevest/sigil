import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 6v15H8V6H2V4h14v2zm8 8v7h-2v-7h-3v-2h8v2z" />
    </Svg>
  )
})
Icon.displayName = 'FontSize2'
/**
 * Remix Icon: Font Size 2
 * @see {@link https://remixicon.com/icon/font-size-2 Remix Icon Docs}
 */
export const FontSize2 = Icon
