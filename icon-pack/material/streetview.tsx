import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.56 15.33C11.22 15.6 11 16.03 11 16.5V22H18C19.1 22 20 21.1 20 20V14.02C19.06 13.69 18.05 13.5 17 13.5C14.97 13.5 13.07 14.2 11.56 15.33Z" />
      <Path d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 9.76142 14.2386 12 17 12Z" />
      <Path d="M10.5 7C10.5 5.92 10.77 4.9 11.24 4H4C2.9 4 2 4.9 2 6V20C2 20.55 2.23 21.05 2.59 21.41L12.41 11.59C11.23 10.42 10.5 8.8 10.5 7Z" />
    </Svg>
  )
}

Icon.displayName = 'Streetview'

/**
 * Material Icon: Streetview
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:streetview Material Icon Docs}
 */
export const Streetview = memo(Icon)
