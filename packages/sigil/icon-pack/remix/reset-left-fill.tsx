import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v2a8 8 0 1 0 5.135 1.865L15 8V2h6l-2.447 2.447A9.98 9.98 0 0 1 22 12" />
    </Svg>
  )
})
Icon.displayName = 'ResetLeftFill'
/**
 * Remix Icon: Reset Left Fill
 * @see {@link https://remixicon.com/icon/reset-left-fill Remix Icon Docs}
 */
export const ResetLeftFill = Icon
