import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.5 10C4.29 10 2.5 11.79 2.5 14C2.5 16.21 4.29 18 6.5 18C8.71 18 10.5 16.21 10.5 14C10.5 11.79 8.71 10 6.5 10ZM6.5 16C5.4 16 4.5 15.1 4.5 14C4.5 12.9 5.4 12 6.5 12C7.6 12 8.5 12.9 8.5 14C8.5 15.1 7.6 16 6.5 16ZM14.51 15C12.86 15 11.51 16.35 11.51 18C11.51 19.65 12.86 21 14.51 21C16.16 21 17.51 19.65 17.51 18C17.51 16.35 16.16 15 14.51 15ZM14.51 19C13.96 19 13.51 18.55 13.51 18C13.51 17.45 13.96 17 14.51 17C15.06 17 15.51 17.45 15.51 18C15.51 18.55 15.06 19 14.51 19ZM16 3C12.97 3 10.5 5.47 10.5 8.5C10.5 11.53 12.97 14 16 14C19.03 14 21.5 11.53 21.5 8.5C21.5 5.47 19.03 3 16 3ZM16 12C14.07 12 12.5 10.43 12.5 8.5C12.5 6.57 14.07 5 16 5C17.93 5 19.5 6.57 19.5 8.5C19.5 10.43 17.93 12 16 12Z" />
    </Svg>
  )
}

Icon.displayName = 'BubbleChart'

/**
 * Material Icon: Bubble Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bubble_chart Material Icon Docs}
 */
export const BubbleChart = memo(Icon)
