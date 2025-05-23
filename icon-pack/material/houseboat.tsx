import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 16.75C10.05 16.75 9.9 17.75 8.66 17.75C7.47 17.75 7.24 16.75 5.33 16.75C3.38 16.75 3.24 17.75 2 17.75V19.75C3.9 19.75 4.17 18.75 5.35 18.75C6.54 18.75 6.77 19.75 8.68 19.75C10.63 19.75 10.76 18.75 12 18.75C13.24 18.75 13.37 19.75 15.32 19.75C17.23 19.75 17.46 18.75 18.65 18.75C19.83 18.75 20.1 19.75 22 19.75V17.75C20.76 17.75 20.62 16.75 18.67 16.75C16.76 16.75 16.53 17.75 15.34 17.75C14.1 17.75 13.95 16.75 12 16.75ZM20.34 12.09L18.97 13.46C18.78 13.64 18.52 13.75 18.26 13.75H17V10.4L18.32 11.37L19.5 9.75L12 4.25L4.5 9.75L5.68 11.36L7 10.4V13.75H5.74C5.47 13.75 5.22 13.64 5.03 13.46L3.66 12.09L2.25 13.5L3.62 14.87C4.18 15.43 4.95 15.75 5.74 15.75H18.25C19.05 15.75 19.81 15.43 20.37 14.87L21.74 13.5L20.34 12.09ZM13 13.75V11.75H11V13.75H9V8.93L12 6.73L15 8.93V13.75H13Z" />
    </Svg>
  )
}

Icon.displayName = 'Houseboat'

/**
 * Material Icon: Houseboat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:houseboat Material Icon Docs}
 */
export const Houseboat = memo(Icon)
