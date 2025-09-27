import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
Icon.displayName = 'SettingsFill'
/**
 * Remix Icon: Settings Fill
 * @see {@link https://remixicon.com/icon/settings-fill Remix Icon Docs}
 */
export const SettingsFill = Icon
