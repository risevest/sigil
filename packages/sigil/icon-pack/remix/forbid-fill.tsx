import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M8.523 7.109A6 6 0 0 0 7.11 8.523l8.368 8.368a6 6 0 0 0 1.414-1.414z" />
    </Svg>
  )
})
Icon.displayName = 'ForbidFill'
/**
 * Remix Icon: Forbid Fill
 * @see {@link https://remixicon.com/icon/forbid-fill Remix Icon Docs}
 */
export const ForbidFill = Icon
