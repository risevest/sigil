import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.08 8C10.56 5.16 13.02 3 16 3C19.31 3 22 5.69 22 9C22 11.97 19.84 14.44 17 14.92V21H15V14.91C15 13.93 15.71 13.11 16.67 12.94C18.56 12.63 20 10.98 20 9C20 6.79 18.21 5 16 5C14.02 5 12.37 6.44 12.06 8.33C11.89 9.29 11.07 10 10.09 10H5.83L7.42 11.59L6 13L2 9L6 5L7.41 6.41L5.83 8H10.08Z" />
    </Svg>
  )
}

Icon.displayName = 'RoundaboutLeft'

/**
 * Material Icon: Roundabout Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roundabout_left Material Icon Docs}
 */
export const RoundaboutLeft = memo(Icon)
