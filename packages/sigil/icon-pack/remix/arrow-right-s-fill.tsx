import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 12-6 6V6z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightSFill'
/**
 * Remix Icon: Arrow Right S Fill
 * @see {@link https://remixicon.com/icon/arrow-right-s-fill Remix Icon Docs}
 */
export const ArrowRightSFill = Icon
