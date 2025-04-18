import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.71 3.83531L18.71 6.08531V10.7853C18.71 11.9753 18.48 13.1453 18.07 14.2253L19.58 15.7353C20.3 14.2053 20.71 12.5153 20.71 10.7853V4.69531L12.71 1.69531L7.48998 3.65531L9.03998 5.20531L12.71 3.83531ZM3.51998 2.50531L2.09998 3.91531L4.70998 6.52531V10.7853C4.70998 15.8353 8.11998 20.5453 12.71 21.6953C14.43 21.2653 15.99 20.3353 17.26 19.0753L20.49 22.3053L21.9 20.8953L3.51998 2.50531ZM12.71 19.6153C9.25998 18.4853 6.70998 14.7953 6.70998 10.7853V8.52531L15.85 17.6653C14.95 18.5453 13.88 19.2353 12.71 19.6153Z" />
    </Svg>
  )
}

Icon.displayName = 'RemoveModerator'

/**
 * Material Icon: Remove Moderator
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove_moderator Material Icon Docs}
 */
export const RemoveModerator = memo(Icon)
