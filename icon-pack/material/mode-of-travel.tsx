import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.56 18.9C12.6 19.9 11.5 20.93 10.25 22C4.92 17.45 2.25 13.52 2.25 10.2C2.25 5.22 6.05 2 10.25 2C14.44 2 18.24 5.21 18.25 10.17L20.34 8.08L21.75 9.5L17.25 14L12.75 9.5L14.16 8.09L16.25 10.17C16.24 6.55 13.59 4 10.25 4C6.9 4 4.25 6.57 4.25 10.2C4.25 12.54 6.2 15.64 10.25 19.34C10.89 18.75 11.48 18.18 12.02 17.63C11.85 17.29 11.75 16.91 11.75 16.51C11.75 15.13 12.87 14.01 14.25 14.01C15.63 14.01 16.75 15.13 16.75 16.51C16.75 17.89 15.63 19 14.25 19C14.01 19 13.78 18.97 13.56 18.9Z" />
    </Svg>
  )
}

Icon.displayName = 'ModeOfTravel'

/**
 * Material Icon: Mode Of Travel
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mode_of_travel Material Icon Docs}
 */
export const ModeOfTravel = memo(Icon)
