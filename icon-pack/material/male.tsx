import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 11C11.43 11 13 12.57 13 14.5C13 16.43 11.43 18 9.5 18C7.57 18 6 16.43 6 14.5C6 12.57 7.57 11 9.5 11ZM9.5 9C6.46 9 4 11.46 4 14.5C4 17.54 6.46 20 9.5 20C12.54 20 15 17.54 15 14.5C15 13.34 14.64 12.27 14.03 11.38L18 7.42V10H20V4H14V6H16.58L12.61 9.97C11.73 9.36 10.66 9 9.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Male'

/**
 * Material Icon: Male
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:male Material Icon Docs}
 */
export const Male = memo(Icon)
