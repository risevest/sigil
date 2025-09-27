import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 .5 16 8l7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8z" />
    </Svg>
  )
})
Icon.displayName = 'Shining2Fill'
/**
 * Remix Icon: Shining 2 Fill
 * @see {@link https://remixicon.com/icon/shining-2-fill Remix Icon Docs}
 */
export const Shining2Fill = Icon
