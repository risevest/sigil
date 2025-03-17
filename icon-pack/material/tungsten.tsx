import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 18.5H11V21.5H13V18.5Z" />
      <Path d="M5 10.5H2V12.5H5V10.5Z" />
      <Path d="M22 10.5H19V12.5H22V10.5Z" />
      <Path d="M17.3012 15.8943L15.8941 17.3014L18.0154 19.4227L19.4225 18.0156L17.3012 15.8943Z" />
      <Path d="M6.70547 15.8872L4.58417 18.0085L5.9913 19.4156L8.1126 17.2943L6.70547 15.8872Z" />
      <Path d="M15 7.52V2.5H9V7.52C7.79 8.44 7 9.87 7 11.5C7 14.26 9.24 16.5 12 16.5C14.76 16.5 17 14.26 17 11.5C17 9.87 16.21 8.44 15 7.52ZM11 4.5H13V6.6C12.68 6.54 12.34 6.5 12 6.5C11.66 6.5 11.32 6.54 11 6.6V4.5ZM12 14.5C10.35 14.5 9 13.15 9 11.5C9 9.85 10.35 8.5 12 8.5C13.65 8.5 15 9.85 15 11.5C15 13.15 13.65 14.5 12 14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Tungsten'

/**
 * Material Icon: Tungsten
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tungsten Material Icon Docs}
 */
export const Tungsten = memo(Icon)
