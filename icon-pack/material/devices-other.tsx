import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6ZM13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16C14 15.12 13.61 14.33 13 13.78V12ZM11 17.5C10.17 17.5 9.5 16.83 9.5 16C9.5 15.17 10.17 14.5 11 14.5C11.83 14.5 12.5 15.17 12.5 16C12.5 16.83 11.83 17.5 11 17.5ZM22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8ZM21 18H17V10H21V18Z" />
    </Svg>
  )
}

Icon.displayName = 'DevicesOther'

/**
 * Material Icon: Devices Other
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:devices_other Material Icon Docs}
 */
export const DevicesOther = memo(Icon)
