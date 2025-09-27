import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 8 6 6H6z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpSFill'
/**
 * Remix Icon: Arrow Up S Fill
 * @see {@link https://remixicon.com/icon/arrow-up-s-fill Remix Icon Docs}
 */
export const ArrowUpSFill = Icon
