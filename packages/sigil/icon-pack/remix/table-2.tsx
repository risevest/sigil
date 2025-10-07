import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 10v4h6v-4zm-2 0H5v4h6zm2 9h6v-3h-6zm-2 0v-3H5v3zm2-14v3h6V5zm-2 0H5v3h6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
Icon.displayName = 'Table2'
/**
 * Remix Icon: Table 2
 * @see {@link https://remixicon.com/icon/table-2 Remix Icon Docs}
 */
export const Table2 = Icon
