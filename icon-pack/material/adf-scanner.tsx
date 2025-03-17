import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 12H18V4H6V12H5C3.34 12 2 13.34 2 15V20H22V15C22 13.34 20.66 12 19 12ZM8 6H16V12H8V6ZM20 18H4V15C4 14.45 4.45 14 5 14H19C19.55 14 20 14.45 20 15V18Z" />
      <Path d="M18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z" />
    </Svg>
  )
}

Icon.displayName = 'AdfScanner'

/**
 * Material Icon: Adf Scanner
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:adf_scanner Material Icon Docs}
 */
export const AdfScanner = memo(Icon)
