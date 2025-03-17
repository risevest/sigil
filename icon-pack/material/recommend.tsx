import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
      <Path d="M17 10H12.41L12.99 6.59V6.39C12.98 6.13 12.87 5.88 12.69 5.69L12 5L7.4 10C7.13 10.26 6.98 10.62 7 11V16C7 17.1 7.9 18 9 18H14.5C15.06 18.03 15.58 17.71 15.8 17.2L17.9 12.3C17.98 12.15 18.02 11.97 18 11.8V11C18 10.45 17.55 10 17 10Z" />
    </Svg>
  )
}

Icon.displayName = 'Recommend'

/**
 * Material Icon: Recommend
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:recommend Material Icon Docs}
 */
export const Recommend = memo(Icon)
