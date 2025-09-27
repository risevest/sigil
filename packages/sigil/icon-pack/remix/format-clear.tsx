import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.651 14.065 11.605 20H9.574l1.35-7.661-7.41-7.41L4.93 3.515 20.485 19.07l-1.414 1.414zm-.878-6.535.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257z" />
    </Svg>
  )
})
Icon.displayName = 'FormatClear'
/**
 * Remix Icon: Format Clear
 * @see {@link https://remixicon.com/icon/format-clear Remix Icon Docs}
 */
export const FormatClear = Icon
