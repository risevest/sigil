import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.27 6.65L8.73 2.57C9.12 1.92 10.06 1.92 10.45 2.57L11.93 5.03L10.7 7.09L9.7 8.71L6.27 6.65ZM22.22 12.47L20.62 9.81L17.16 11.81L19.37 15.5H20.5C21.26 15.5 21.95 15.07 22.29 14.39C22.43 14.11 22.5 13.81 22.5 13.5C22.5 13.14 22.4 12.79 22.22 12.47ZM16.5 20.5H18C18.76 20.5 19.45 20.07 19.79 19.39L21.24 16.5H16.5V14.5L12.5 18.5L16.5 22.5V20.5ZM10.5 16.5H6.2L5.36 17.91C5.06 18.41 5.04 19.03 5.3 19.56C5.58 20.13 6.17 20.5 6.82 20.5H10.5V16.5ZM6.62 13.85L8.35 14.89L6.98 9.4L1.5 10.77L3.2 11.79L2.79 12.48C2.44 13.07 2.41 13.79 2.72 14.4L4.35 17.66L6.62 13.85ZM17.52 4.64L16.22 2.47C15.85 1.87 15.2 1.5 14.5 1.5H10.97L14.09 6.7L12.37 7.73L17.86 9.1L19.23 3.61L17.52 4.64Z" />
    </Svg>
  )
}

Icon.displayName = 'Recycling'

/**
 * Material Icon: Recycling
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:recycling Material Icon Docs}
 */
export const Recycling = memo(Icon)
