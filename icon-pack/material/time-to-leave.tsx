import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.85 6H17.14L18.18 9H5.81L6.85 6ZM19 16H5V11.34L5.12 11H18.89L19 11.34V16Z" />
      <Path d="M7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15Z" />
      <Path d="M16.5 15C17.3284 15 18 14.3284 18 13.5C18 12.6716 17.3284 12 16.5 12C15.6716 12 15 12.6716 15 13.5C15 14.3284 15.6716 15 16.5 15Z" />
    </Svg>
  )
}

Icon.displayName = 'TimeToLeave'

/**
 * Material Icon: Time To Leave
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:time_to_leave Material Icon Docs}
 */
export const TimeToLeave = memo(Icon)
