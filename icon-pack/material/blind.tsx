import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.75 5.25C11.8546 5.25 12.75 4.35457 12.75 3.25C12.75 2.14543 11.8546 1.25 10.75 1.25C9.64543 1.25 8.75 2.14543 8.75 3.25C8.75 4.35457 9.64543 5.25 10.75 5.25Z" />
      <Path d="M11.38 6.87C11.21 6.52 10.94 6.22 10.58 6.02C9.97 5.66 9.24 5.68 8.65 5.99V5.98L3.25 9.05V13.75H5.25V10.21L6.75 9.36C6.43 10.46 6.25 11.6 6.25 12.75V18.08L3.65 21.55L5.25 22.75L8.25 18.75L8.47 15.21L10.25 17.75V22.75H12.25V16.25L10.28 13.44C10.24 12.92 10.14 11.68 10.73 10.04C11.48 11.18 12.61 12.02 13.93 12.45L19.88 22.75L20.75 22.25L15.27 12.75H16.25V10.75C15.76 10.75 13.37 10.92 12.17 8.54" />
    </Svg>
  )
}

Icon.displayName = 'Blind'

/**
 * Material Icon: Blind
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:blind Material Icon Docs}
 */
export const Blind = memo(Icon)
