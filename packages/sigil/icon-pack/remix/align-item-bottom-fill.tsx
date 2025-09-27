import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm7 12H3v2h18z" />
    </Svg>
  )
})
Icon.displayName = 'AlignItemBottomFill'
/**
 * Remix Icon: Align Item Bottom Fill
 * @see {@link https://remixicon.com/icon/align-item-bottom-fill Remix Icon Docs}
 */
export const AlignItemBottomFill = Icon
