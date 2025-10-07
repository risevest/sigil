import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
    </Svg>
  )
})
Icon.displayName = 'GameFill'
/**
 * Remix Icon: Game Fill
 * @see {@link https://remixicon.com/icon/game-fill Remix Icon Docs}
 */
export const GameFill = Icon
