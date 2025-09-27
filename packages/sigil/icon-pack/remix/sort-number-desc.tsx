import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 11V3H7.314L5 3.62v2.329l2-.539V11zm13-3-4-5-4 5h3v13h2V8zM8 16.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31z" />
    </Svg>
  )
})
Icon.displayName = 'SortNumberDesc'
/**
 * Remix Icon: Sort Number Desc
 * @see {@link https://remixicon.com/icon/sort-number-desc Remix Icon Docs}
 */
export const SortNumberDesc = Icon
