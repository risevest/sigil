import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 3.75C18.5 4.85 17.6 5.75 16.5 5.75C15.4 5.75 14.5 4.85 14.5 3.75C14.5 2.65 15.4 1.75 16.5 1.75C17.6 1.75 18.5 2.65 18.5 3.75ZM15.78 20.15L16.54 20.42C17.16 20.63 17.81 20.75 18.5 20.75C19.34 20.75 20.15 20.57 20.88 20.25L22 21.38C20.95 21.93 19.76 22.25 18.5 22.25C17.64 22.25 16.82 22.11 16.05 21.84L2 16.72L2.5 15.31L9.4 17.82L11.12 13.38L7.55 9.65C6.66 8.71 6.88 7.18 8 6.53L11.48 4.52C12.58 3.88 14 4.42 14.39 5.63L14.72 6.71C15.16 8.13 16.2 9.28 17.55 9.85L18.07 8.25L19.5 8.71L18.38 12.16C15.93 11.76 13.9 10.09 13 7.84L10.47 9.29L13.5 12.75L11.28 18.51L14.37 19.63L16.47 13.19C16.93 13.37 17.41 13.5 17.91 13.6L15.78 20.15Z" />
    </Svg>
  )
}

Icon.displayName = 'DownhillSkiing'

/**
 * Material Icon: Downhill Skiing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:downhill_skiing Material Icon Docs}
 */
export const DownhillSkiing = memo(Icon)
