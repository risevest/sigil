import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 14C2.5 15.3 3.34 16.4 4.5 16.82V20H2.5V22H8.5V20H6.5V16.82C7.66 16.4 8.5 15.3 8.5 14V6H2.5V14ZM4.5 8H6.5V11H4.5V8ZM4.5 13H6.5V14C6.5 14.55 6.05 15 5.5 15C4.95 15 4.5 14.55 4.5 14V13Z" />
      <Path d="M20.14 8.54L19.18 8.22C18.77 8.08 18.5 7.7 18.5 7.27V3C18.5 2.45 18.05 2 17.5 2H14.5C13.95 2 13.5 2.45 13.5 3V7.28C13.5 7.71 13.23 8.09 12.82 8.23L11.86 8.55C11.05 8.83 10.5 9.59 10.5 10.45V20C10.5 21.1 11.4 22 12.5 22H19.5C20.6 22 21.5 21.1 21.5 20V10.44C21.5 9.58 20.95 8.82 20.14 8.54ZM15.5 4H16.5V5H15.5V4ZM19.5 20H12.5V18H19.5V20ZM19.5 16H12.5V14H19.5V16ZM19.5 12H12.5V10.44L13.45 10.12C14.68 9.72 15.5 8.57 15.5 7.28V7H16.5V7.28C16.5 8.57 17.32 9.72 18.55 10.13L19.5 10.44V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Liquor'

/**
 * Material Icon: Liquor
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:liquor Material Icon Docs}
 */
export const Liquor = memo(Icon)
