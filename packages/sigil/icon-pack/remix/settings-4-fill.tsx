import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.334 4.545a10 10 0 0 1 3.542-2.048A4 4 0 0 0 12 4a4 4 0 0 0 3.124-1.502 10 10 0 0 1 3.542 2.048 4 4 0 0 0 .262 3.454 4 4 0 0 0 2.863 1.955 10 10 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a4 4 0 0 0-.262 3.455 10 10 0 0 1-3.542 2.047A4 4 0 0 0 12 20a4 4 0 0 0-3.124 1.503 10 10 0 0 1-3.542-2.048 4 4 0 0 0-.262-3.455 4 4 0 0 0-2.863-1.954 10 10 0 0 1 0-4.091 4 4 0 0 0 2.863-1.955 4 4 0 0 0 .262-3.454M13.5 14.597a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196" />
    </Svg>
  )
})
Icon.displayName = 'Settings4Fill'
/**
 * Remix Icon: Settings 4 Fill
 * @see {@link https://remixicon.com/icon/settings-4-fill Remix Icon Docs}
 */
export const Settings4Fill = Icon
