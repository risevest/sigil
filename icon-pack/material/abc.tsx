import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11H19.5V10.5H17.5V13.5H19.5V13H21V14C21 14.55 20.55 15 20 15H17C16.45 15 16 14.55 16 14V10C16 9.45 16.45 9 17 9H20C20.55 9 21 9.45 21 10V11ZM8 10V15H6.5V13.5H4.5V15H3V10C3 9.45 3.45 9 4 9H7C7.55 9 8 9.45 8 10ZM6.5 10.5H4.5V12H6.5V10.5ZM13.5 12C14.05 12 14.5 12.45 14.5 13V14C14.5 14.55 14.05 15 13.5 15H9.5V9H13.5C14.05 9 14.5 9.45 14.5 10V11C14.5 11.55 14.05 12 13.5 12ZM11 10.5V11.25H13V10.5H11ZM13 12.75H11V13.5H13V12.75Z" />
    </Svg>
  )
}

Icon.displayName = 'Abc'

/**
 * Material Icon: Abc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:abc Material Icon Docs}
 */
export const Abc = memo(Icon)
