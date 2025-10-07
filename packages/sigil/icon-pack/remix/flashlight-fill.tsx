import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 10h7l-9 13v-9H4l9-13z" />
    </Svg>
  )
})
Icon.displayName = 'FlashlightFill'
/**
 * Remix Icon: Flashlight Fill
 * @see {@link https://remixicon.com/icon/flashlight-fill Remix Icon Docs}
 */
export const FlashlightFill = Icon
