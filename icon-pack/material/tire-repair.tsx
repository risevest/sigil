import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 8.5C17.45 8.5 17 8.05 17 7.5C17 7.22 17.11 6.97 17.29 6.79C17.69 6.39 19.75 5.75 19.75 5.75C19.75 5.75 19.11 7.81 18.71 8.21C18.53 8.39 18.28 8.5 18 8.5ZM19 13.5V18.5C19 20.15 17.65 21.5 16 21.5C14.35 21.5 13 20.15 13 18.5V16.5C13 15.95 12.55 15.5 12 15.5C11.45 15.5 11 15.95 11 16.5V19.5C11 20.6 10.1 21.5 9 21.5H3C1.9 21.5 1 20.6 1 19.5V5.5C1 4.4 1.9 3.5 3 3.5H9C10.1 3.5 11 4.4 11 5.5V13.67C11.31 13.56 11.65 13.5 12 13.5C13.65 13.5 15 14.85 15 16.5V18.5C15 19.05 15.45 19.5 16 19.5C16.55 19.5 17 19.05 17 18.5V13.5H16V12.08C14.23 11.31 13 9.55 13 7.5C13 4.74 15.24 2.5 18 2.5C20.76 2.5 23 4.74 23 7.5C23 9.55 21.77 11.31 20 12.08V13.5H19ZM21 7.5C21 5.84 19.66 4.5 18 4.5C16.34 4.5 15 5.84 15 7.5C15 9.16 16.34 10.5 18 10.5C19.66 10.5 21 9.16 21 7.5ZM9 7.5L7 9.5V6.67L8.17 5.5H3.83L5 6.67V9.5L3 7.5V9.67L5 11.67V14.5L3 12.5V14.67L5 16.67V19.5L3 17.5V19.5H9V17.5L7 19.5V16.67L9 14.67V12.5L7 14.5V11.67L9 9.67V7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'TireRepair'

/**
 * Material Icon: Tire Repair
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tire_repair Material Icon Docs}
 */
export const TireRepair = memo(Icon)
