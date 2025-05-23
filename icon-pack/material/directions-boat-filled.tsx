import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.769 12.66L18.649 16.63C17.869 16.2 17.579 15.77 15.999 13.96C14.399 15.78 13.569 17 11.999 17C10.469 17 9.65902 15.85 7.99902 13.96C6.39902 15.78 6.12902 16.17 5.34902 16.61L4.21902 12.65L11.999 10.11L19.769 12.66ZM14.999 1H8.99902V4H5.99902C4.89902 4 3.99902 4.9 3.99902 6V10.62L2.70902 11.04C2.07902 11.23 1.89902 11.88 2.04902 12.32L3.94902 19H3.99902C5.59902 19 7.01902 18.12 7.99902 17C8.97902 18.12 10.399 19 11.999 19C13.599 19 15.019 18.12 15.999 17C16.979 18.12 18.399 19 19.999 19H20.049L21.959 12.32C22.069 11.95 21.999 11.26 21.299 11.04L19.999 10.62V6C19.999 4.9 19.099 4 17.999 4H14.999V1ZM5.99902 9.97V6H17.999V9.97L11.999 8L5.99902 9.97ZM15.999 19.68C14.779 20.53 13.389 20.96 11.999 20.96C10.609 20.96 9.21902 20.53 7.99902 19.68C6.77902 20.53 5.38902 21 3.99902 21H1.99902V23H3.99902C5.37902 23 6.73902 22.65 7.99902 22.01C9.25902 22.65 10.629 22.98 11.999 22.98C13.369 22.98 14.739 22.66 15.999 22.01C17.259 22.66 18.619 23 19.999 23H21.999V21H19.999C18.609 21 17.219 20.53 15.999 19.68Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsBoatFilled'

/**
 * Material Icon: Directions Boat Filled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_boat_filled Material Icon Docs}
 */
export const DirectionsBoatFilled = memo(Icon)
