import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z" />
    </Svg>
  )
})
Icon.displayName = 'BracketsLine'
/**
 * Remix Icon: Brackets Line
 * @see {@link https://remixicon.com/icon/brackets-line Remix Icon Docs}
 */
export const BracketsLine = Icon
