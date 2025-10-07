import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z" />
    </Svg>
  )
})
Icon.displayName = 'Number1'
/**
 * Remix Icon: Number 1
 * @see {@link https://remixicon.com/icon/number-1 Remix Icon Docs}
 */
export const Number1 = Icon
