import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.00392 15H19.0039V9H5.00392V15ZM7.00392 11H17.0039V13H7.00392V11Z" />
      <Path d="M13.0039 2H11.0039V5H13.0039V2Z" />
      <Path d="M19.08 4.59648L17.2903 6.39887L18.7095 7.80807L20.4992 6.00568L19.08 4.59648Z" />
      <Path d="M13.0039 19H11.0039V22H13.0039V19Z" />
      <Path d="M17.2939 17.71L19.0839 19.51L20.5039 18.09L18.7039 16.3L17.2939 17.71Z" />
      <Path d="M4.90576 4.60196L3.49863 6.00909L5.28759 7.79806L6.69472 6.39093L4.90576 4.60196Z" />
      <Path d="M5.29846 16.2865L3.49608 18.0762L4.90528 19.4954L6.70766 17.7057L5.29846 16.2865Z" />
    </Svg>
  )
}

Icon.displayName = 'Fluorescent'

/**
 * Material Icon: Fluorescent
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fluorescent Material Icon Docs}
 */
export const Fluorescent = memo(Icon)
