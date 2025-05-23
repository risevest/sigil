import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.9398 9.06C19.4998 5.73 16.5698 3 12.9998 3C9.46985 3 6.56985 5.61 6.07985 9L4.14985 12.48C3.73985 13.14 4.21985 14 4.99985 14H5.99985V16C5.99985 17.1 6.89985 18 7.99985 18H8.99985V21H15.9998V16.32C18.6198 15.07 20.3498 12.24 19.9398 9.06ZM14.8898 14.63L13.9998 15.05V19H10.9998V16H7.99985V12H6.69985L8.02985 9.67C8.20985 7.06 10.3498 5 12.9998 5C15.7598 5 17.9998 7.24 17.9998 10C17.9998 12.09 16.7098 13.88 14.8898 14.63Z" />
      <Path d="M12.4998 12.54C12.0898 12.54 11.7598 12.85 11.7598 13.27C11.7598 13.68 12.0898 14.01 12.4998 14.01C12.9198 14.01 13.2298 13.68 13.2298 13.27C13.2298 12.85 12.9198 12.54 12.4998 12.54Z" />
      <Path d="M12.4998 7C11.4698 7 10.7598 7.67 10.4998 8.45L11.4598 8.85C11.5898 8.46 11.8898 7.99 12.5098 7.99C13.4598 7.99 13.6398 8.88 13.3098 9.35C12.9898 9.8 12.4498 10.1 12.1698 10.61C11.9398 11.01 11.9898 11.48 11.9898 11.77H13.0498C13.0498 11.22 13.0898 11.12 13.1798 10.95C13.4098 10.53 13.8298 10.33 14.2698 9.68C14.6698 9.09 14.5198 8.3 14.2598 7.88C13.9498 7.39 13.3598 7 12.4998 7Z" />
    </Svg>
  )
}

Icon.displayName = 'PsychologyAlt'

/**
 * Material Icon: Psychology Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:psychology_alt Material Icon Docs}
 */
export const PsychologyAlt = memo(Icon)
