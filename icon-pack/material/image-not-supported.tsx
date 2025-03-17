import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.605 21.1945L2.80502 1.39453L1.39502 2.80453L3.70502 5.12453V18.2945C3.70502 19.3945 4.60502 20.2945 5.70502 20.2945H18.875L21.185 22.6045L22.605 21.1945ZM5.70502 18.2945V7.12453L12.545 13.9645L11.705 15.0145L9.70502 12.2945L6.70502 16.2945H14.875L16.875 18.2945H5.70502ZM8.53502 4.29453L6.53502 2.29453H19.705C20.805 2.29453 21.705 3.19453 21.705 4.29453V17.4645L19.705 15.4645V4.29453H8.53502Z" />
    </Svg>
  )
}

Icon.displayName = 'ImageNotSupported'

/**
 * Material Icon: Image Not Supported
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:image_not_supported Material Icon Docs}
 */
export const ImageNotSupported = memo(Icon)
