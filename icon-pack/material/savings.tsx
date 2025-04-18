import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 10.5C15 9.95 15.45 9.5 16 9.5C16.55 9.5 17 9.95 17 10.5C17 11.05 16.55 11.5 16 11.5C15.45 11.5 15 11.05 15 10.5ZM8 9.5H13V7.5H8V9.5ZM22 8V14.97L19.18 15.91L17.5 21.5H12V19.5H10V21.5H4.5C4.5 21.5 2 13.04 2 10C2 6.96 4.46 4.5 7.5 4.5H12.5C13.41 3.29 14.86 2.5 16.5 2.5C17.33 2.5 18 3.17 18 4C18 4.21 17.96 4.4 17.88 4.58C17.74 4.92 17.62 5.31 17.56 5.73L19.83 8H22ZM20 10H19L15.5 6.5C15.5 5.85 15.59 5.21 15.76 4.59C14.79 4.84 14 5.56 13.67 6.5H7.5C5.57 6.5 4 8.07 4 10C4 11.88 5.22 16.65 6.01 19.5H8V17.5H14V19.5H16.01L17.56 14.35L20 13.53V10Z" />
    </Svg>
  )
}

Icon.displayName = 'Savings'

/**
 * Material Icon: Savings
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:savings Material Icon Docs}
 */
export const Savings = memo(Icon)
