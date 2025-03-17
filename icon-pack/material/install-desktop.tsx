import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 17H4V5H12V3H4C2.89 3 2 3.89 2 5V17C2 18.1 2.89 19 4 19H8V21H16V19H20C21.1 19 22 18.1 22 17V14H20V17Z" />
      <Path d="M17 14L22 9L20.59 7.59L18 10.17V3H16V10.17L13.41 7.59L12 9L17 14Z" />
    </Svg>
  )
}

Icon.displayName = 'InstallDesktop'

/**
 * Material Icon: Install Desktop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:install_desktop Material Icon Docs}
 */
export const InstallDesktop = memo(Icon)
