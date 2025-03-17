import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM21 16H3V8H21V16ZM6 15H8V13H10V11H8V9H6V11H4V13H6V15Z" />
      <Path d="M14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15Z" />
      <Path d="M18.5 12C19.3284 12 20 11.3284 20 10.5C20 9.67157 19.3284 9 18.5 9C17.6716 9 17 9.67157 17 10.5C17 11.3284 17.6716 12 18.5 12Z" />
    </Svg>
  )
}

Icon.displayName = 'VideogameAsset'

/**
 * Material Icon: Videogame Asset
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:videogame_asset Material Icon Docs}
 */
export const VideogameAsset = memo(Icon)
