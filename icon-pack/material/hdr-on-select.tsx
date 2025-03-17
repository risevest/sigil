import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 18.5V17.5C18 16.7 17.3 16 16.5 16H13V22H14.5V20H15.6L16.5 22H18L17.1 19.9C17.6 19.6 18 19.1 18 18.5ZM16.5 18.5H14.5V17.5H16.5V18.5ZM3.5 18H1.5V16H0V22H1.5V19.5H3.5V22H5V16H3.5V18ZM10 16H6.5V22H10C10.8 22 11.5 21.3 11.5 20.5V17.5C11.5 16.7 10.8 16 10 16ZM10 20.5H8V17.5H10V20.5ZM24 20H22V22H20.5V20H18.5V18.5H20.5V16.5H22V18.5H24V20ZM12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 2C8.69 2 6 4.69 6 8C6 11.31 8.69 14 12 14C15.31 14 18 11.31 18 8C18 4.69 15.31 2 12 2Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrOnSelect'

/**
 * Material Icon: Hdr On Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_on_select Material Icon Docs}
 */
export const HdrOnSelect = memo(Icon)
