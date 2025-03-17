import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 11H15V3C15 1.9 14.1 1 13 1H11C9.9 1 9 1.9 9 3V11H8C5.24 11 3 13.24 3 16V23H21V16C21 13.24 18.76 11 16 11ZM11 3H13V11H11V3ZM19 21H17V18C17 17.45 16.55 17 16 17C15.45 17 15 17.45 15 18V21H13V18C13 17.45 12.55 17 12 17C11.45 17 11 17.45 11 18V21H9V18C9 17.45 8.55 17 8 17C7.45 17 7 17.45 7 18V21H5V16C5 14.35 6.35 13 8 13H16C17.65 13 19 14.35 19 16V21Z" />
    </Svg>
  )
}

Icon.displayName = 'CleaningServices'

/**
 * Material Icon: Cleaning Services
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cleaning_services Material Icon Docs}
 */
export const CleaningServices = memo(Icon)
