import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" />
      <Path d="M19 13V11C17.46 11.02 15.91 10.25 14.93 9.17L13.64 7.74C13.47 7.55 13.26 7.4 13.03 7.29C13.02 7.29 13.02 7.28 13.01 7.28H13C12.65 7.08 12.25 6.98 11.81 7.02C10.76 7.11 10 8.04 10 9.09V15C10 16.1 10.9 17 12 17H17V22H19V16.5C19 15.4 18.1 14.5 17 14.5H14V11.05C15.29 12.12 17.25 12.99 19 13ZM10 20C8.34 20 7 18.66 7 17C7 15.69 7.84 14.59 9 14.17V12.1C6.72 12.56 5 14.58 5 17C5 19.76 7.24 22 10 22C12.42 22 14.44 20.28 14.9 18H12.83C12.42 19.16 11.31 20 10 20Z" />
    </Svg>
  )
}

Icon.displayName = 'Accessible'

/**
 * Material Icon: Accessible
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:accessible Material Icon Docs}
 */
export const Accessible = memo(Icon)
