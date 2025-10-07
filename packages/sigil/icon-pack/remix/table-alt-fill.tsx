import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 14V3H3a1 1 0 0 0-1 1v10zm8 0V3H9v11zm7 0V4a1 1 0 0 0-1-1h-4v11zm-1 7a1 1 0 0 0 1-1v-4H2v4a1 1 0 0 0 1 1z" />
    </Svg>
  )
})
Icon.displayName = 'TableAltFill'
/**
 * Remix Icon: Table Alt Fill
 * @see {@link https://remixicon.com/icon/table-alt-fill Remix Icon Docs}
 */
export const TableAltFill = Icon
