import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5zM14 16V5.171L6.968 16z" />
    </Svg>
  )
})
Icon.displayName = 'Number4'
/**
 * Remix Icon: Number 4
 * @see {@link https://remixicon.com/icon/number-4 Remix Icon Docs}
 */
export const Number4 = Icon
