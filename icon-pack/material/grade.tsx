import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.63L13.44 11.03L14.64 11.13L17.11 11.34L14.32 13.76L14.59 14.94L15.15 17.35L13.03 16.07L12 15.43L10.97 16.05L8.85 17.33L9.41 14.92L9.68 13.74L6.89 11.32L9.36 11.11L10.56 11.01L11.03 9.9L12 7.63ZM12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Grade'

/**
 * Material Icon: Grade
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grade Material Icon Docs}
 */
export const Grade = memo(Icon)
