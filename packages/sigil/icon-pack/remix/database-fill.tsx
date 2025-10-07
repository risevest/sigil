import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 7V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-6 9v2h5v-2zm9 0v2h5v-2zm0-3v2h5v-2zm0-3v2h5v-2zm-9 3v2h5v-2z" />
    </Svg>
  )
})
Icon.displayName = 'DatabaseFill'
/**
 * Remix Icon: Database Fill
 * @see {@link https://remixicon.com/icon/database-fill Remix Icon Docs}
 */
export const DatabaseFill = Icon
