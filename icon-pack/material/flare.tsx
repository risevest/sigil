import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 11H1V13H7V11ZM9.17 7.76L7.05 5.64L5.64 7.05L7.76 9.17L9.17 7.76ZM13 1H11V7H13V1ZM18.36 7.05L16.95 5.64L14.83 7.76L16.24 9.17L18.36 7.05ZM17 11V13H23V11H17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM14.83 16.24L16.95 18.36L18.36 16.95L16.24 14.83L14.83 16.24ZM5.64 16.95L7.05 18.36L9.17 16.24L7.76 14.83L5.64 16.95ZM11 23H13V17H11V23Z" />
    </Svg>
  )
}

Icon.displayName = 'Flare'

/**
 * Material Icon: Flare
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flare Material Icon Docs}
 */
export const Flare = memo(Icon)
