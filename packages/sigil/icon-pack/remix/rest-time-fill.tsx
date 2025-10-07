import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 6v8h8a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z" />
    </Svg>
  )
})
Icon.displayName = 'RestTimeFill'
/**
 * Remix Icon: Rest Time Fill
 * @see {@link https://remixicon.com/icon/rest-time-fill Remix Icon Docs}
 */
export const RestTimeFill = Icon
