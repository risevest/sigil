import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 2V13H10V22L17 10H13L16 2H7Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashOn'

/**
 * Material Icon: Flash On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flash_on Material Icon Docs}
 */
export const FlashOn = memo(Icon)
