import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.75 4V20C17.85 20 18.75 19.1 18.75 18V6C18.75 4.9 17.85 4 16.75 4Z" />
      <Path d="M12.75 2H3.75C2.65 2 1.75 2.9 1.75 4V20C1.75 21.1 2.65 22 3.75 22H12.75C13.85 22 14.75 21.1 14.75 20V4C14.75 2.9 13.85 2 12.75 2ZM12.75 20H3.75V4H12.75V20Z" />
      <Path d="M20.75 6V18C21.58 18 22.25 17.33 22.25 16.5V7.5C22.25 6.67 21.58 6 20.75 6Z" />
    </Svg>
  )
}

Icon.displayName = 'WebStories'

/**
 * Material Icon: Web Stories
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:web_stories Material Icon Docs}
 */
export const WebStories = memo(Icon)
