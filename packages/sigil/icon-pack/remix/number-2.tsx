import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 7.5a4 4 0 1 0-8 0H6a6 6 0 1 1 10.663 3.776l-7.319 8.723L18 20v2H6v-1.127l9.064-10.802A3.98 3.98 0 0 0 16 7.5" />
    </Svg>
  )
})
Icon.displayName = 'Number2'
/**
 * Remix Icon: Number 2
 * @see {@link https://remixicon.com/icon/number-2 Remix Icon Docs}
 */
export const Number2 = Icon
