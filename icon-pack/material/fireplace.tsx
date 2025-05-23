import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.01 12.46C11.86 12.88 11.86 13.28 11.93 13.74C12.03 14.29 12.26 14.78 12.13 15.34C12 15.93 11.36 16.72 10.6 16.97C11.88 18.02 13.8 17.34 13.99 15.65C14.16 14.11 12.55 13.67 12.01 12.46Z" />
      <Path d="M2 2V22H22V2H2ZM12 18C10.42 18 9.03 16.12 9 14.94C9 14.89 8.99 14.81 8.99 14.72C8.86 12.99 9.99 11.52 11.46 10.35C11.93 11.36 12.73 12.38 14.03 13.27C14.61 13.69 15 14.13 15 15C15 16.65 13.65 18 12 18ZM20 20H18V18H15.98C16.61 17.16 17 16.13 17 15C17 13.11 15.91 12.15 15.15 11.63C12.2 9.61 13 7 13 7C6.27 10.57 6.98 14.47 7 15C7.03 15.96 7.49 17.07 8.23 18H6V20H4V4H20V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Fireplace'

/**
 * Material Icon: Fireplace
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fireplace Material Icon Docs}
 */
export const Fireplace = memo(Icon)
