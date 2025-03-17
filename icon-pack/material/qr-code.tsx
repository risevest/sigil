import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" fill={color} />
      <Path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" fill={color} />
      <Path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" fill={color} />
      <Path d="M21 19H19V21H21V19Z" fill={color} />
      <Path d="M15 13H13V15H15V13Z" fill={color} />
      <Path d="M17 15H15V17H17V15Z" fill={color} />
      <Path d="M15 17H13V19H15V17Z" fill={color} />
      <Path d="M17 19H15V21H17V19Z" fill={color} />
      <Path d="M19 17H17V19H19V17Z" fill={color} />
      <Path d="M19 13H17V15H19V13Z" fill={color} />
      <Path d="M21 15H19V17H21V15Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'QrCode'

/**
 * Material Icon: Qr Code
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:qr_code Material Icon Docs}
 */
export const QrCode = memo(Icon)
