import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 3.25C12.5 2.15 13.4 1.25 14.5 1.25C15.6 1.25 16.5 2.15 16.5 3.25C16.5 4.35 15.6 5.25 14.5 5.25C13.4 5.25 12.5 4.35 12.5 3.25ZM6.32 18.78L5.18 17.31L4 18.25L6.38 21.29C6.89 21.94 7.54 22.44 8.26 22.7C8.54 22.8 8.79 22.74 8.98 22.59C9.28 22.36 9.4 21.89 9.1 21.52C9.02 21.42 8.9 21.35 8.79 21.3C8.36 21.12 7.97 20.85 7.65 20.47L7.57 20.37L11 17.95L11.89 14.73L14 16.73V21.25H12V22.75H15.87C16.69 22.75 17.48 22.54 18.13 22.14C18.39 21.98 18.5 21.75 18.5 21.5C18.5 21.12 18.2 20.75 17.73 20.75C17.6 20.75 17.47 20.79 17.36 20.85C16.96 21.08 16.49 21.22 16 21.25V15.23L13.89 13.23L14.49 10.23C15.79 11.73 17.8 12.75 20 12.75V10.75C18.1 10.75 16.49 9.73 15.69 8.33L14.69 6.75C14.29 6.15 13.69 5.75 12.99 5.75C12.24 5.75 11.58 6.09 7 8.03V12.75H9V9.33L10.79 8.63L9.2 16.75L6.32 18.78Z" />
    </Svg>
  )
}

Icon.displayName = 'Snowshoeing'

/**
 * Material Icon: Snowshoeing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:snowshoeing Material Icon Docs}
 */
export const Snowshoeing = memo(Icon)
