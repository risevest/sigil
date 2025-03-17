import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 6L11 11L19 6V9H21V4C21 2.9 20.1 2 19 2H3C1.9 2 1.01 2.9 1.01 4L1 16C1 17.1 1.9 18 3 18H13V16H3V6ZM19 4L11 9L3 4H19Z" />
      <Path d="M21 14V18C21 19.1 20.1 20 19 20C17.9 20 17 19.1 17 18V13.5C17 13.22 17.22 13 17.5 13C17.78 13 18 13.22 18 13.5V18H20V13.5C20 12.12 18.88 11 17.5 11C16.12 11 15 12.12 15 13.5V18C15 20.21 16.79 22 19 22C21.21 22 23 20.21 23 18V14H21Z" />
    </Svg>
  )
}

Icon.displayName = 'AttachEmail'

/**
 * Material Icon: Attach Email
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:attach_email Material Icon Docs}
 */
export const AttachEmail = memo(Icon)
