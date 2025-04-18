import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18ZM11.25 15.92C10.7 15.82 10.2 15.6 9.75 15.3L11.25 13.8V15.92ZM12.75 15.92V13.81L14.25 15.31C13.8 15.61 13.3 15.82 12.75 15.92ZM15.31 14.25L13.81 12.75H15.92C15.82 13.3 15.61 13.8 15.31 14.25ZM15.92 11.25H13.81L15.31 9.75C15.61 10.2 15.82 10.7 15.92 11.25ZM12.75 8.08C13.3 8.18 13.8 8.4 14.25 8.7L12.75 10.2V8.08ZM12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11ZM11.25 8.08V10.19L9.75 8.69C10.2 8.39 10.7 8.18 11.25 8.08ZM8.69 9.75L10.19 11.25H8.08C8.18 10.7 8.39 10.2 8.69 9.75ZM10.19 12.75L8.69 14.25C8.39 13.81 8.18 13.3 8.07 12.75H10.19Z" />
    </Svg>
  )
}

Icon.displayName = 'HeatPump'

/**
 * Material Icon: Heat Pump
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:heat_pump Material Icon Docs}
 */
export const HeatPump = memo(Icon)
