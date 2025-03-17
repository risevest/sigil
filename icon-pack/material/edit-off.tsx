import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.7701 8.30961L15.6901 9.22961L14.5801 10.3396L15.9901 11.7496L18.5101 9.22961L14.7601 5.47961L12.2401 7.99961L13.6501 9.40961L14.7701 8.30961ZM21.4201 6.32961C21.8101 5.93961 21.8101 5.30961 21.4201 4.91961L19.0801 2.57961C18.8801 2.37961 18.6301 2.28961 18.3701 2.28961C18.1101 2.28961 17.8601 2.38961 17.6701 2.57961L15.8401 4.40961L19.5901 8.15961L21.4201 6.32961ZM3.5201 2.09961L2.1001 3.50961L9.4201 10.8296L3.7101 16.5396V20.2896H7.4601L13.1701 14.5796L20.4901 21.8996L21.9001 20.4896L3.5201 2.09961ZM6.6301 18.2896H5.7101V17.3696L10.8401 12.2396L11.7601 13.1596L6.6301 18.2896Z" />
    </Svg>
  )
}

Icon.displayName = 'EditOff'

/**
 * Material Icon: Edit Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edit_off Material Icon Docs}
 */
export const EditOff = memo(Icon)
