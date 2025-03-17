import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.59 15.59L15 17L19 13L15 9L13.59 10.41L15.17 12C13.66 11.67 11.44 12.08 10 13.36V6.83L11.59 8.42L13 7L9 3L5 7L6.41 8.41L8 6.83V21H10V17C10.73 14.42 13.07 13.53 15.17 14L13.59 15.59Z" />
    </Svg>
  )
}

Icon.displayName = 'ForkRight'

/**
 * Material Icon: Fork Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fork_right Material Icon Docs}
 */
export const ForkRight = memo(Icon)
