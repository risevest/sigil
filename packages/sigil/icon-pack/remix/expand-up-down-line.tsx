import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.207 9.043 12 2.836 5.793 9.043l1.414 1.414L12 5.664l4.793 4.793zM5.793 14.957 12 21.164l6.207-6.207-1.414-1.414L12 18.336l-4.793-4.793z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandUpDownLine'
/**
 * Remix Icon: Expand Up Down Line
 * @see {@link https://remixicon.com/icon/expand-up-down-line Remix Icon Docs}
 */
export const ExpandUpDownLine = Icon
