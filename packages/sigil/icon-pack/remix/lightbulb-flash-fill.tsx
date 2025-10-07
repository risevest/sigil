import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1zm-3-9.995V6l-4.5 6.005H11v4l4.5-6z" />
    </Svg>
  )
})
Icon.displayName = 'LightbulbFlashFill'
/**
 * Remix Icon: Lightbulb Flash Fill
 * @see {@link https://remixicon.com/icon/lightbulb-flash-fill Remix Icon Docs}
 */
export const LightbulbFlashFill = Icon
