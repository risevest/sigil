import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-4v14h4zM6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7m1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001z" />
    </Svg>
  )
})
Icon.displayName = 'InsertColumnLeft'
/**
 * Remix Icon: Insert Column Left
 * @see {@link https://remixicon.com/icon/insert-column-left Remix Icon Docs}
 */
export const InsertColumnLeft = Icon
