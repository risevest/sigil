import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.636 4.222 4.222 5.636l9.606 9.607L10 19.07h9.071V10l-3.828 3.829z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightDownLongFill'
/**
 * Remix Icon: Arrow Right Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-long-fill Remix Icon Docs}
 */
export const ArrowRightDownLongFill = Icon
