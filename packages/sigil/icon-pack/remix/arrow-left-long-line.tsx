import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13v-2H5.828l3.95-3.95-1.414-1.414L2 12l6.364 6.364 1.414-1.414L5.828 13z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftLongLine'
/**
 * Remix Icon: Arrow Left Long Line
 * @see {@link https://remixicon.com/icon/arrow-left-long-line Remix Icon Docs}
 */
export const ArrowLeftLongLine = Icon
