import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 8.369 8.968 4.747-.936 1.768L12 10.632l-8.032 4.252-.936-1.768z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpWideLine'
/**
 * Remix Icon: Arrow Up Wide Line
 * @see {@link https://remixicon.com/icon/arrow-up-wide-line Remix Icon Docs}
 */
export const ArrowUpWideLine = Icon
