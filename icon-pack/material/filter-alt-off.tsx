import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.6601 5.28961L14.0901 9.83961L15.5201 11.2696C16.5501 9.95961 20.5001 4.89961 20.5001 4.89961C21.0101 4.23961 20.5401 3.28961 19.7101 3.28961H7.5401L9.5401 5.28961H17.6601Z" />
      <Path d="M3.5201 2.09961L2.1001 3.50961L10.7101 12.2896V18.2896C10.7101 18.8396 11.1601 19.2896 11.7101 19.2896H13.7101C14.2601 19.2896 14.7101 18.8396 14.7101 18.2896V16.1196L20.4901 21.8996L21.9001 20.4896L3.5201 2.09961Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterAltOff'

/**
 * Material Icon: Filter Alt Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_alt_off Material Icon Docs}
 */
export const FilterAltOff = memo(Icon)
