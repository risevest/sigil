import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.4751 11.2896L14.8951 6.69961L16.3051 5.28961L22.3051 11.2896L18.7151 14.8796L17.3051 13.4596L19.4751 11.2896ZM1.69507 3.50961L5.88507 7.69961L2.30507 11.2896L8.30507 17.2896L9.71507 15.8796L5.13507 11.2896L7.30507 9.11961L20.0851 21.8996L21.4951 20.4896L3.11507 2.09961L1.69507 3.50961Z" />
    </Svg>
  )
}

Icon.displayName = 'CodeOff'

/**
 * Material Icon: Code Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:code_off Material Icon Docs}
 */
export const CodeOff = memo(Icon)
