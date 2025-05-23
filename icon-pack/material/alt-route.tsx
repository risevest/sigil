import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.78 11.16L8.36 12.58C7.68 11.89 7.02 11 6.57 9.64L8.51 9.15C8.83 10.04 9.28 10.65 9.78 11.16ZM11 6L7 2L3 6H6.02C6.04 6.81 6.1 7.54 6.21 8.17L8.15 7.68C8.08 7.2 8.03 6.63 8.02 6H11ZM21 6L17 2L13 6H15.99C15.89 9.68 14.71 10.75 13.45 11.88C12.95 12.32 12.44 12.8 12 13.43C11.66 12.94 11.27 12.55 10.87 12.19L9.46 13.6C10.39 14.45 11 15.14 11 17V22H13V17C13 14.98 13.71 14.34 14.79 13.37C16.17 12.13 17.87 10.59 17.99 6H21Z" />
    </Svg>
  )
}

Icon.displayName = 'AltRoute'

/**
 * Material Icon: Alt Route
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:alt_route Material Icon Docs}
 */
export const AltRoute = memo(Icon)
