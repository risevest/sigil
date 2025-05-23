import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 13.5V2L3 13.5H11ZM9 11.5H6.83L9 8.38V11.5ZM21 13.5C21 6.5 14.5 1 12.5 1C12.5 1 13.5 4 13.5 7.5C13.5 11 12.5 13.5 12.5 13.5H21ZM15.38 5.24C16.8 6.76 18.26 8.96 18.79 11.5H15.11C15.32 10.4 15.5 9.04 15.5 7.5C15.5 6.71 15.45 5.95 15.38 5.24ZM22 15H2C2.31 16.53 3.16 17.84 4.33 18.73C4.98 18.46 5.55 18.01 6 17.5C6.73 18.34 7.8 19 9 19C10.2 19 11.27 18.34 12 17.5C12.73 18.34 13.8 19 15 19C16.2 19 17.26 18.34 18 17.5C18.45 18.01 19.02 18.46 19.67 18.73C20.84 17.84 21.69 16.53 22 15ZM22 23V21H21C19.96 21 18.92 20.65 18 20C16.17 21.3 13.83 21.3 12 20C10.17 21.3 7.83 21.3 6 20C5.09 20.65 4.04 21 3 21H2V23H3C4.03 23 5.05 22.75 6 22.25C7.89 23.25 10.11 23.25 12 22.25C13.89 23.25 16.11 23.25 18 22.25C18.95 22.75 19.97 23 21 23H22Z" />
    </Svg>
  )
}

Icon.displayName = 'Sailing'

/**
 * Material Icon: Sailing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sailing Material Icon Docs}
 */
export const Sailing = memo(Icon)
