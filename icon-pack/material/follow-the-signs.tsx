import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 5.25C10.6 5.25 11.5 4.35 11.5 3.25C11.5 2.15 10.6 1.25 9.5 1.25C8.4 1.25 7.5 2.15 7.5 3.25C7.5 4.35 8.4 5.25 9.5 5.25ZM5.75 8.65L3 22.75H5.1L6.85 14.75L9 16.75V22.75H11V15.2L8.95 13.15L9.55 10.15C10.85 11.75 12.8 12.75 15 12.75V10.75C13.15 10.75 11.55 9.75 10.65 8.3L9.7 6.7C9.35 6.1 8.7 5.75 8 5.75C7.75 5.75 7.5 5.8 7.25 5.9L2 8.05V12.75H4V9.4L5.75 8.65ZM13 1.75V8.75H16.75V22.75H18.25V8.75H22V1.75H13ZM18.01 7.75V6H14.5V4.5H18.01V2.75L20.5 5.25L18.01 7.75Z" />
    </Svg>
  )
}

Icon.displayName = 'FollowTheSigns'

/**
 * Material Icon: Follow The Signs
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:follow_the_signs Material Icon Docs}
 */
export const FollowTheSigns = memo(Icon)
