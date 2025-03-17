import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.51 8.38035L17.92 9.79035L8.73 18.9804L10.14 20.3904L19.33 11.2004L20.75 12.6204V8.38035H16.51ZM8.23 12.1304L11.77 8.59035L13.96 9.51035L15.44 8.03035L4.31 3.61035L3.25 4.67035L7.67 15.8104L9.15 14.3304L8.23 12.1304ZM7.41 10.4104L5.18 5.54035L10.05 7.77035L7.41 10.4104Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotationAngleup'

/**
 * Material Icon: Text Rotation Angleup
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotation_angleup Material Icon Docs}
 */
export const TextRotationAngleup = memo(Icon)
