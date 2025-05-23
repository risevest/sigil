import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.22998 22.2705L15.23 17.2705L6.22998 8.27047L1.22998 22.2705ZM11.58 16.4505L4.52998 18.9705L7.04998 11.9205L11.58 16.4505Z" />
      <Path d="M13.76 12.8005L19.35 7.21047C19.84 6.72047 20.63 6.72047 21.12 7.21047L21.71 7.80047L22.77 6.74047L22.18 6.15047C21.11 5.08047 19.36 5.08047 18.29 6.15047L12.7 11.7405L13.76 12.8005Z" />
      <Path d="M9.28998 7.15047L8.69998 7.74047L9.75998 8.80047L10.35 8.21047C11.42 7.14047 11.42 5.39047 10.35 4.32047L9.75998 3.73047L8.69998 4.80047L9.28998 5.39047C9.76998 5.87047 9.76998 6.67047 9.28998 7.15047Z" />
      <Path d="M16.29 12.1505L14.7 13.7405L15.76 14.8005L17.35 13.2105C17.84 12.7205 18.63 12.7205 19.12 13.2105L20.73 14.8205L21.79 13.7605L20.18 12.1505C19.1 11.0805 17.36 11.0805 16.29 12.1505Z" />
      <Path d="M14.29 6.15047L10.7 9.74047L11.76 10.8005L15.35 7.21047C16.42 6.14047 16.42 4.39047 15.35 3.32047L13.76 1.73047L12.7 2.79047L14.29 4.38047C14.77 4.87047 14.77 5.67047 14.29 6.15047Z" />
    </Svg>
  )
}

Icon.displayName = 'Celebration'

/**
 * Material Icon: Celebration
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:celebration Material Icon Docs}
 */
export const Celebration = memo(Icon)
