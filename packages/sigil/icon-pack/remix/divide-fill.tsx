import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 11h14v2H5zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
Icon.displayName = 'DivideFill'
/**
 * Remix Icon: Divide Fill
 * @see {@link https://remixicon.com/icon/divide-fill Remix Icon Docs}
 */
export const DivideFill = Icon
