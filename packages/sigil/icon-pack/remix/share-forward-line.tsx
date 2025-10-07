import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12" />
    </Svg>
  )
})
Icon.displayName = 'ShareForwardLine'
/**
 * Remix Icon: Share Forward Line
 * @see {@link https://remixicon.com/icon/share-forward-line Remix Icon Docs}
 */
export const ShareForwardLine = Icon
