import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m.535 2-4.667 7 4.667 7H20V5zM16 11v2H9v-2z" />
    </Svg>
  )
})
Icon.displayName = 'DeleteBackLine'
/**
 * Remix Icon: Delete Back Line
 * @see {@link https://remixicon.com/icon/delete-back-line Remix Icon Docs}
 */
export const DeleteBackLine = Icon
