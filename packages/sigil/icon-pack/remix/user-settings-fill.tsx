import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m2.595 5.811a3.5 3.5 0 0 1 0-1.622l-.992-.573 1-1.732.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573-1 1.732-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573-1-1.732zM18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
Icon.displayName = 'UserSettingsFill'
/**
 * Remix Icon: User Settings Fill
 * @see {@link https://remixicon.com/icon/user-settings-fill Remix Icon Docs}
 */
export const UserSettingsFill = Icon
