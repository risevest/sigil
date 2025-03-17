import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 9.24 3.12 6.74 4.93 4.93L12 12V2C17.52 2 22 6.48 22 12Z" />
    </Svg>
  )
}

Icon.displayName = 'IncompleteCircle'

/**
 * Material Icon: Incomplete Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:incomplete_circle Material Icon Docs}
 */
export const IncompleteCircle = memo(Icon)
