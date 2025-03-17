import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 18H5V6H12V4H5V3H12V1.01L5 1C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H15C16.1 23 17 22.1 17 21V16H15V18ZM15 21H5V20H15V21Z" />
      <Path d="M16 14L21 9L19.59 7.59L17 10.17V3H15V10.17L12.41 7.59L11 9L16 14Z" />
    </Svg>
  )
}

Icon.displayName = 'InstallMobile'

/**
 * Material Icon: Install Mobile
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:install_mobile Material Icon Docs}
 */
export const InstallMobile = memo(Icon)
