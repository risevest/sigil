import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 16-6-6h12z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownSFill'
/**
 * Remix Icon: Arrow Down S Fill
 * @see {@link https://remixicon.com/icon/arrow-down-s-fill Remix Icon Docs}
 */
export const ArrowDownSFill = Icon
