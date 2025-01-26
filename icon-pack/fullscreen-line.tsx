import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z" />
    </Svg>
  )
}

Icon.displayName = 'FullscreenLine'

/**
 * Remix Icon: Fullscreen Line
 * @see {@link https://remixicon.com/icon/fullscreen-line Remix Icon Docs}
 */
export const FullscreenLine = memo(Icon)
