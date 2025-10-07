import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.778 5.636-1.414-1.414L6.93 15.657V10.07h-2v9h9v-2H8.343z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftDownLongLine'
/**
 * Remix Icon: Arrow Left Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-long-line Remix Icon Docs}
 */
export const ArrowLeftDownLongLine = Icon
