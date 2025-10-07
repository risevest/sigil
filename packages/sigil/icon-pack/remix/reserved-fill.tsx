import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM8 8v2h8V8z" />
    </Svg>
  )
})
Icon.displayName = 'ReservedFill'
/**
 * Remix Icon: Reserved Fill
 * @see {@link https://remixicon.com/icon/reserved-fill Remix Icon Docs}
 */
export const ReservedFill = Icon
