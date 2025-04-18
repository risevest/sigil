import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
    </Svg>
  )
}

Icon.displayName = 'PauseLargeLine'

/**
 * Remix Icon: Pause Large Line
 * @see {@link https://remixicon.com/icon/pause-large-line Remix Icon Docs}
 */
export const PauseLargeLine = memo(Icon)
