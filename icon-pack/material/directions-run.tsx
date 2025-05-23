import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.55 5.25C15.65 5.25 16.55 4.35 16.55 3.25C16.55 2.15 15.65 1.25 14.55 1.25C13.45 1.25 12.55 2.15 12.55 3.25C12.55 4.35 13.45 5.25 14.55 5.25ZM10.95 19.15L11.95 14.75L14.05 16.75V22.75H16.05V15.25L13.95 13.25L14.55 10.25C15.85 11.75 17.85 12.75 20.05 12.75V10.75C18.15 10.75 16.55 9.75 15.75 8.35L14.75 6.75C14.35 6.15 13.75 5.75 13.05 5.75C12.75 5.75 12.55 5.85 12.25 5.85L7.04995 8.05V12.75H9.04995V9.35L10.85 8.65L9.24995 16.75L4.34995 15.75L3.94995 17.75L10.95 19.15Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsRun'

/**
 * Material Icon: Directions Run
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_run Material Icon Docs}
 */
export const DirectionsRun = memo(Icon)
