import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 2C12.29 2 9.95 3.54 8.78 5.78C7.5 6.45 6.44 7.5 5.78 8.78C3.54 9.95 2 12.29 2 15C2 18.87 5.13 22 9 22C11.71 22 14.05 20.46 15.22 18.22C16.5 17.55 17.56 16.5 18.22 15.22C20.46 14.05 22 11.71 22 9C22 5.13 18.87 2 15 2ZM9 20C6.24 20 4 17.76 4 15C4 13.88 4.37 12.84 5 12C5 15.87 8.13 19 12 19C11.16 19.63 10.12 20 9 20ZM12 17C9.24 17 7 14.76 7 12C7 10.88 7.37 9.84 8 9C8 12.86 11.13 15.99 15 16C14.16 16.63 13.12 17 12 17ZM16.7 13.7C16.17 13.89 15.6 14 15 14C12.24 14 10 11.76 10 9C10 8.4 10.11 7.83 10.3 7.3C10.83 7.11 11.4 7 12 7C14.76 7 17 9.24 17 12C17 12.6 16.89 13.17 16.7 13.7ZM19 12C19 8.14 15.87 5.01 12 5C12.84 4.37 13.87 4 15 4C17.76 4 20 6.24 20 9C20 10.12 19.63 11.16 19 12Z" />
    </Svg>
  )
}

Icon.displayName = 'Animation'

/**
 * Material Icon: Animation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:animation Material Icon Docs}
 */
export const Animation = memo(Icon)
