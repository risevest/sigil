import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 17h10v-2.5l3.5 3.5-3.5 3.5V19H7v2.5L3.5 18 7 14.5zm6-11v9h-2V6H5V4h14v2z" />
    </Svg>
  )
})
Icon.displayName = 'TextSpacing'
/**
 * Remix Icon: Text Spacing
 * @see {@link https://remixicon.com/icon/text-spacing Remix Icon Docs}
 */
export const TextSpacing = Icon
