import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zm8 12v-2.5l4 3.5-4 3.5V19H5v-2z" />
    </Svg>
  )
})
Icon.displayName = 'TextDirectionL'
/**
 * Remix Icon: Text Direction L
 * @see {@link https://remixicon.com/icon/text-direction-l Remix Icon Docs}
 */
export const TextDirectionL = Icon
