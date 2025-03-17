import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.6 19.4998H21V21.4998H15V15.4998H17V18.2298C18.83 16.7598 20 14.5198 20 11.9998C20 7.9298 16.94 4.5598 13 4.0698V2.0498C18.05 2.5498 22 6.8098 22 11.9998C22 14.9898 20.68 17.6698 18.6 19.4998ZM4 11.9998C4 9.4798 5.17 7.2298 7 5.7698V8.4998H9V2.4998H3V4.4998H5.4C3.32 6.3298 2 9.0098 2 11.9998C2 17.1898 5.95 21.4498 11 21.9498V19.9298C7.06 19.4398 4 16.0698 4 11.9998ZM16.24 8.1098L10.58 13.7698L7.75 10.9398L6.34 12.3498L10.58 16.5898L17.65 9.5198L16.24 8.1098Z" />
    </Svg>
  )
}

Icon.displayName = 'PublishedWithChanges'

/**
 * Material Icon: Published With Changes
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:published_with_changes Material Icon Docs}
 */
export const PublishedWithChanges = memo(Icon)
