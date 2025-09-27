import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDownSLine'
/**
 * Remix Icon: Arrow Down S Line
 * @see {@link https://remixicon.com/icon/arrow-down-s-line Remix Icon Docs}
 */
export const ArrowDownSLine = Icon
