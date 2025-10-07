import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 2H9v12h6zM7 7H4v12h3zm10 0v12h3V7zM9 3v2h6V3z" />
    </Svg>
  )
})
Icon.displayName = 'Briefcase3Line'
/**
 * Remix Icon: Briefcase 3 Line
 * @see {@link https://remixicon.com/icon/briefcase-3-line Remix Icon Docs}
 */
export const Briefcase3Line = Icon
