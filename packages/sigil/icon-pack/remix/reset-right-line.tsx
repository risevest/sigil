import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-4.5 1.385V8h2V2h-6v2H6a9.99 9.99 0 0 0-4 8" />
    </Svg>
  )
})
Icon.displayName = 'ResetRightLine'
/**
 * Remix Icon: Reset Right Line
 * @see {@link https://remixicon.com/icon/reset-right-line Remix Icon Docs}
 */
export const ResetRightLine = Icon
