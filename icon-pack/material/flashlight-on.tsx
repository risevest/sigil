import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2H6V8L8 11V22H16V11L18 8V2ZM16 4V5H8V4H16ZM14 10.4V20H10V10.39L8 7.39V7H16V7.39L14 10.4Z" />
      <Path d="M12 15.5C12.8284 15.5 13.5 14.8284 13.5 14C13.5 13.1716 12.8284 12.5 12 12.5C11.1716 12.5 10.5 13.1716 10.5 14C10.5 14.8284 11.1716 15.5 12 15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashlightOn'

/**
 * Material Icon: Flashlight On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flashlight_on Material Icon Docs}
 */
export const FlashlightOn = memo(Icon)
