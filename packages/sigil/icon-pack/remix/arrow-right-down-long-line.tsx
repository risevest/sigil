import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.222 5.636 1.414-1.414L17.07 15.657V10.07h2v9h-9v-2h5.586z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightDownLongLine'
/**
 * Remix Icon: Arrow Right Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-down-long-line Remix Icon Docs}
 */
export const ArrowRightDownLongLine = Icon
