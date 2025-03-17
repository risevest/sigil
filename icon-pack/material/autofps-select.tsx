import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.03 5.8H11.97L10.95 8.69H13.05L12.03 5.8Z" />
      <Path d="M5 16.5H3V21.5H5V16.5Z" />
      <Path d="M12 14.5C15.31 14.5 18 11.81 18 8.5C18 5.19 15.31 2.5 12 2.5C8.69 2.5 6 5.19 6 8.5C6 11.81 8.69 14.5 12 14.5ZM11.37 4.5H12.62L15.25 11.5H14.04L13.41 9.71H10.58L9.96 11.5H8.74L11.37 4.5Z" />
      <Path d="M9 16.5H7V21.5H9V16.5Z" />
      <Path d="M13 16.5H11V21.5H13V16.5Z" />
      <Path d="M21 16.5H15V21.5H21V16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AutofpsSelect'

/**
 * Material Icon: Autofps Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:autofps_select Material Icon Docs}
 */
export const AutofpsSelect = memo(Icon)
