import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 6.83L9.41 8.41L8 7L12 3L16 7L14.59 8.41L13 6.83V21H11V6.83Z" />
    </Svg>
  )
}

Icon.displayName = 'Straight'

/**
 * Material Icon: Straight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:straight Material Icon Docs}
 */
export const Straight = memo(Icon)
