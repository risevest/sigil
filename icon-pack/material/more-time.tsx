import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path d="M9.5 8V14L14.2 16.9L15 15.7L11 13.3V8H9.5Z" fill={color} />
      <Path
        d="M17.42 12C17.47 12.33 17.5 12.66 17.5 13C17.5 16.9 14.4 20 10.5 20C6.6 20 3.5 16.9 3.5 13C3.5 9.1 6.6 6 10.5 6C11.2 6 11.87 6.1 12.5 6.29V4.23C11.86 4.08 11.19 4 10.5 4C5.5 4 1.5 8 1.5 13C1.5 18 5.5 22 10.5 22C15.5 22 19.5 18 19.5 13C19.5 12.66 19.48 12.33 19.44 12H17.42Z"
        fill={color}
      />
      <Path d="M19.5 5V2H17.5V5H14.5V7H17.5V10H19.5V7H22.5V5H19.5Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'MoreTime'

/**
 * Material Icon: More Time
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:more_time Material Icon Docs}
 */
export const MoreTime = memo(Icon)
