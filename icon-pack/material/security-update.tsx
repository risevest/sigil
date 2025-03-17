import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 21H7V20H17V21ZM17 18H7V6H17V18ZM7 4V3H17V4H7ZM16 12L12 16L8 12L9.41 10.59L11 12.17V8H13V12.17L14.59 10.58L16 12Z" />
    </Svg>
  )
}

Icon.displayName = 'SecurityUpdate'

/**
 * Material Icon: Security Update
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:security_update Material Icon Docs}
 */
export const SecurityUpdate = memo(Icon)
