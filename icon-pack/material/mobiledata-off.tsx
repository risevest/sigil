import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.71 6.10961L18.3 7.69961L19.71 6.28961L15.71 2.28961L11.71 6.28961L13.12 7.69961L14.71 6.10961V10.4596L16.71 12.4596V6.10961Z" />
      <Path d="M2.10001 3.50961L8.71001 10.1196V16.4696L7.12001 14.8796L5.71001 16.2896L9.71001 20.2896L13.71 16.2896L12.3 14.8796L10.71 16.4696V12.1196L20.49 21.8996L21.9 20.4796L3.52001 2.09961L2.10001 3.50961Z" />
    </Svg>
  )
}

Icon.displayName = 'MobiledataOff'

/**
 * Material Icon: Mobiledata Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mobiledata_off Material Icon Docs}
 */
export const MobiledataOff = memo(Icon)
