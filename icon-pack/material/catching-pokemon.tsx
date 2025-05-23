import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM20 12H16C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12H4C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12Z" />
    </Svg>
  )
}

Icon.displayName = 'CatchingPokemon'

/**
 * Material Icon: Catching Pokemon
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:catching_pokemon Material Icon Docs}
 */
export const CatchingPokemon = memo(Icon)
