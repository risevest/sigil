import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 4.836-6.207 6.207 1.414 1.414L12 7.664l4.793 4.793 1.414-1.414zm0 5.65-6.207 6.207 1.414 1.414L12 13.314l4.793 4.793 1.414-1.414z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpDoubleFill'
/**
 * Remix Icon: Arrow Up Double Fill
 * @see {@link https://remixicon.com/icon/arrow-up-double-fill Remix Icon Docs}
 */
export const ArrowUpDoubleFill = Icon
