import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 12C20 10.21 18.81 8.66 17.09 8.18L14.47 7.44C13.62 7.19 13 6.39 13 5.5V1H4V16H20V12ZM18 14H6V3H11V4H9.5C9.22 4 9 4.22 9 4.5C9 4.78 9.22 5 9.5 5H11L11.1 6H9.5C9.22 6 9 6.22 9 6.5C9 6.78 9.22 7 9.5 7H11.31C11.76 8.12 12.71 9.01 13.91 9.36L16.53 10.09C17.4 10.33 18 11.1 18 12V14ZM5 17C3.34 17 2 18.34 2 20C2 21.66 3.34 23 5 23C6.66 23 8 21.66 8 20C8 18.34 6.66 17 5 17ZM5 21C4.45 21 4 20.55 4 20C4 19.45 4.45 19 5 19C5.55 19 6 19.45 6 20C6 20.55 5.55 21 5 21ZM19 17C17.34 17 16 18.34 16 20C16 21.66 17.34 23 19 23C20.66 23 22 21.66 22 20C22 18.34 20.66 17 19 17ZM19 21C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19C19.55 19 20 19.45 20 20C20 20.55 19.55 21 19 21ZM12 17C10.34 17 9 18.34 9 20C9 21.66 10.34 23 12 23C13.66 23 15 21.66 15 20C15 18.34 13.66 17 12 17ZM12 21C11.45 21 11 20.55 11 20C11 19.45 11.45 19 12 19C12.55 19 13 19.45 13 20C13 20.55 12.55 21 12 21Z" />
    </Svg>
  )
}

Icon.displayName = 'RollerSkating'

/**
 * Material Icon: Roller Skating
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roller_skating Material Icon Docs}
 */
export const RollerSkating = memo(Icon)
