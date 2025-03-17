import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.625 20.75V16.51L14.215 17.92L5.01498 8.73L3.60498 10.14L12.795 19.33L11.385 20.75H15.625ZM11.875 8.23L15.415 11.77L14.495 13.96L15.975 15.44L20.395 4.3L19.335 3.25L8.19498 7.67L9.68498 9.15L11.875 8.23ZM18.465 5.18L16.235 10.05L13.595 7.41L18.465 5.18Z" />
    </Svg>
  )
}

Icon.displayName = 'TextRotationAngledown'

/**
 * Material Icon: Text Rotation Angledown
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_rotation_angledown Material Icon Docs}
 */
export const TextRotationAngledown = memo(Icon)
