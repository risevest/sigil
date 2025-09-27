import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m.535 2-4.667 7 4.667 7H20V5zM13 10.586l2.828-2.829 1.414 1.415L14.414 12l2.828 2.828-1.414 1.415-2.829-2.829-2.828 2.829-1.414-1.415L11.585 12 8.757 9.172l1.414-1.415z" />
    </Svg>
  )
})
Icon.displayName = 'DeleteBack2Line'
/**
 * Remix Icon: Delete Back 2 Line
 * @see {@link https://remixicon.com/icon/delete-back-2-line Remix Icon Docs}
 */
export const DeleteBack2Line = Icon
