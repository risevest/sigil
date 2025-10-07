import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17 8.792l-1.318-2.473-2.473-1.32 2.473-1.318zM8 4.333l2.667 5 5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667zm11.667 12-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18z" />
    </Svg>
  )
})
Icon.displayName = 'Sparkling2Fill'
/**
 * Remix Icon: Sparkling 2 Fill
 * @see {@link https://remixicon.com/icon/sparkling-2-fill Remix Icon Docs}
 */
export const Sparkling2Fill = Icon
