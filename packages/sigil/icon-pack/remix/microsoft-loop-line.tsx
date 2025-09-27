import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 4a8 8 0 1 1 0 16H7.69a6.5 6.5 0 0 0 1.734-3.5H12A4.5 4.5 0 1 0 7.5 12v3.5A4.5 4.5 0 0 1 4 19.889V12a8 8 0 0 1 8-8m0 18c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12v10zm-2.5-7.5V12a2.5 2.5 0 1 1 2.5 2.5z" />
    </Svg>
  )
})
Icon.displayName = 'MicrosoftLoopLine'
/**
 * Remix Icon: Microsoft Loop Line
 * @see {@link https://remixicon.com/icon/microsoft-loop-line Remix Icon Docs}
 */
export const MicrosoftLoopLine = Icon
