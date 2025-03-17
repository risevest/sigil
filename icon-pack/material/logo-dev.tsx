import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.68 14.98H6V9H7.71C8.99 9 9.42 10.03 9.42 10.71V13.27C9.42 13.95 9 14.98 7.68 14.98ZM12.38 11.46V12.53H11.2V13.92H13.13V14.99H10.88C10.48 15 10.14 14.68 10.13 14.28V9.75C10.12 9.35 10.44 9.01 10.84 9H13.12V10.07H11.2V11.46H12.38ZM16.88 14.23C16.4 15.34 15.55 15.12 15.17 14.23L13.77 9H14.95L16.02 13.11L17.09 9H18.27L16.88 14.23Z" />
      <Path d="M7.77 10.12H7.14V13.89H7.77C7.91 13.89 8.05 13.84 8.19 13.73C8.33 13.63 8.4 13.47 8.4 13.26V10.74C8.4 10.53 8.33 10.37 8.19 10.27C8.05 10.17 7.91 10.12 7.77 10.12Z" />
    </Svg>
  )
}

Icon.displayName = 'LogoDev'

/**
 * Material Icon: Logo Dev
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:logo_dev Material Icon Docs}
 */
export const LogoDev = memo(Icon)
