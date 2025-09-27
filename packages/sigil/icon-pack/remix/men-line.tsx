import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.05 8.537 18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414M10.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
    </Svg>
  )
})
Icon.displayName = 'MenLine'
/**
 * Remix Icon: Men Line
 * @see {@link https://remixicon.com/icon/men-line Remix Icon Docs}
 */
export const MenLine = Icon
