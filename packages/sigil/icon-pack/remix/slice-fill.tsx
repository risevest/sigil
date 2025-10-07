import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.768 12.229 2.121 2.121c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.097l2.121 2.121z" />
    </Svg>
  )
})
Icon.displayName = 'SliceFill'
/**
 * Remix Icon: Slice Fill
 * @see {@link https://remixicon.com/icon/slice-fill Remix Icon Docs}
 */
export const SliceFill = Icon
