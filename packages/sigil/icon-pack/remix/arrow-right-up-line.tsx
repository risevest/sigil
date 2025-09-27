import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightUpLine'
/**
 * Remix Icon: Arrow Right Up Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-line Remix Icon Docs}
 */
export const ArrowRightUpLine = Icon
