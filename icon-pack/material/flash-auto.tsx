import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.40002 1.5V13.5H5.40002V22.5L12.4 10.5H8.40002L12.4 1.5H2.40002ZM18.4 1.5H16.4L13.2 10.5H15.1L15.8 8.5H19L19.7 10.5H21.6L18.4 1.5ZM16.25 7.15L17.4 3.5L18.55 7.15H16.25Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashAuto'

/**
 * Material Icon: Flash Auto
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flash_auto Material Icon Docs}
 */
export const FlashAuto = memo(Icon)
