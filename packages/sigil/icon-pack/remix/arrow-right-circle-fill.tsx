import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 9H8v2h4v3l4-4-4-4z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightCircleFill'
/**
 * Remix Icon: Arrow Right Circle Fill
 * @see {@link https://remixicon.com/icon/arrow-right-circle-fill Remix Icon Docs}
 */
export const ArrowRightCircleFill = Icon
