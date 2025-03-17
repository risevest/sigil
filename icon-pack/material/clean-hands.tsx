import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.49 4.75L18.12 6.12L19.49 6.75L18.12 7.38L17.49 8.75L16.86 7.38L15.49 6.75L16.86 6.12L17.49 4.75ZM20.5 13.75C21.6 13.75 22.5 12.85 22.5 11.75C22.5 10.65 20.5 7.75 20.5 7.75C20.5 7.75 18.5 10.65 18.5 11.75C18.5 12.85 19.4 13.75 20.5 13.75ZM11.5 5.85V3.75H13.5C14.07 3.75 14.6 3.92 15.05 4.2L16.48 2.77C15.65 2.14 14.63 1.75 13.5 1.75C12.03 1.75 8.06 1.75 8 1.75V3.75H9.5V5.86C7.72 6.23 6.3 7.54 5.75 9.25H7.91C8.44 8.36 9.39 7.75 10.5 7.75C12.12 7.75 13.44 9.04 13.49 10.65L15.5 11.4V10.75C15.5 8.33 13.78 6.31 11.5 5.85ZM22.5 18.75V19.75L14.5 22.25L7.5 20.31V21.75H1.5V10.75H9.47L15.63 13.05C16.75 13.47 17.5 14.55 17.5 15.75H19.5C21.16 15.75 22.5 17.09 22.5 18.75ZM5.5 19.75V12.75H3.5V19.75H5.5ZM20.4 18.32C20.24 17.99 19.89 17.76 19.5 17.76H14.15C13.61 17.76 13.08 17.67 12.57 17.5L10.19 16.71L10.82 14.81L13.2 15.6C13.51 15.7 15.5 15.75 15.5 15.75C15.5 15.38 15.27 15.05 14.93 14.92L9.11 12.75H7.5V18.23L14.47 20.16L20.4 18.32Z" />
    </Svg>
  )
}

Icon.displayName = 'CleanHands'

/**
 * Material Icon: Clean Hands
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:clean_hands Material Icon Docs}
 */
export const CleanHands = memo(Icon)
