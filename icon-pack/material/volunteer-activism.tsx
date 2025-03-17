import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 12.75C19.59 9.94 22.5 7.31 22.5 5.05C22.5 3.2 21.05 1.75 19.2 1.75C18.16 1.75 17.15 2.24 16.5 3C15.84 2.24 14.84 1.75 13.8 1.75C11.95 1.75 10.5 3.2 10.5 5.05C10.5 7.31 13.41 9.94 16.5 12.75ZM13.8 3.75C14.24 3.75 14.69 3.96 14.98 4.3L16.5 6.09L18.02 4.3C18.31 3.96 18.76 3.75 19.2 3.75C19.94 3.75 20.5 4.31 20.5 5.05C20.5 6.17 18.46 8.22 16.5 10.04C14.54 8.22 12.5 6.16 12.5 5.05C12.5 4.31 13.06 3.75 13.8 3.75Z" />
      <Path d="M19.5 15.75H17.5C17.5 14.55 16.75 13.47 15.63 13.05L9.47 10.75H1.5V21.75H7.5V20.31L14.5 22.25L22.5 19.75V18.75C22.5 17.09 21.16 15.75 19.5 15.75ZM3.5 19.75V12.75H5.5V19.75H3.5ZM14.47 20.16L7.5 18.23V12.75H9.11L14.93 14.92C15.27 15.05 15.5 15.38 15.5 15.75C15.5 15.75 13.51 15.7 13.2 15.6L10.82 14.81L10.19 16.71L12.57 17.5C13.08 17.67 13.61 17.76 14.15 17.76H19.5C19.89 17.76 20.24 17.99 20.4 18.32L14.47 20.16Z" />
    </Svg>
  )
}

Icon.displayName = 'VolunteerActivism'

/**
 * Material Icon: Volunteer Activism
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:volunteer_activism Material Icon Docs}
 */
export const VolunteerActivism = memo(Icon)
