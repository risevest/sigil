import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.086 12-4.793 4.793 1.414 1.414L12.914 12 6.707 5.793 5.293 7.207zM17 6v12h-2V6z" />
    </Svg>
  )
})
Icon.displayName = 'SkipRightLine'
/**
 * Remix Icon: Skip Right Line
 * @see {@link https://remixicon.com/icon/skip-right-line Remix Icon Docs}
 */
export const SkipRightLine = Icon
