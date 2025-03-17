import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 8V14C22 15.1 21.1 16 20 16H19V14H20V8H4V14H10V16H4C2.9 16 2 15.1 2 14V8C2 6.9 2.9 6 4 6H20C21.1 6 22 6.9 22 8ZM14.5 18L15.59 15.59L18 14.5L15.59 13.41L14.5 11L13.41 13.41L11 14.5L13.41 15.59L14.5 18ZM17 13L17.62 11.62L19 11L17.62 10.38L17 9L16.38 10.38L15 11L16.38 11.62L17 13ZM14.5 18L15.59 15.59L18 14.5L15.59 13.41L14.5 11L13.41 13.41L11 14.5L13.41 15.59L14.5 18ZM17 13L17.62 11.62L19 11L17.62 10.38L17 9L16.38 10.38L15 11L16.38 11.62L17 13Z" />
    </Svg>
  )
}

Icon.displayName = 'SmartButton'

/**
 * Material Icon: Smart Button
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:smart_button Material Icon Docs}
 */
export const SmartButton = memo(Icon)
