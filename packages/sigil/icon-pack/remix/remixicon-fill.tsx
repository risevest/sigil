import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.53 17.53 20.001 21h-17V4h10.667v.008A7 7 0 0 1 14.137 4q-.135.556-.136 1.166c0 2.318 2.015 4.333 4.667 4.333.724 0 1.419-.197 2.032-.538a7.002 7.002 0 0 1-4.17 8.567M18.501 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
    </Svg>
  )
})
Icon.displayName = 'RemixiconFill'
/**
 * Remix Icon: Remixicon Fill
 * @see {@link https://remixicon.com/icon/remixicon-fill Remix Icon Docs}
 */
export const RemixiconFill = Icon
