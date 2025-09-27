import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zM9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4m7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4" />
    </Svg>
  )
})
Icon.displayName = 'ClosedCaptioningLine'
/**
 * Remix Icon: Closed Captioning Line
 * @see {@link https://remixicon.com/icon/closed-captioning-line Remix Icon Docs}
 */
export const ClosedCaptioningLine = Icon
