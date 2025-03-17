import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 2.5C13.5 1.4 14.4 0.5 15.5 0.5C16.6 0.5 17.5 1.4 17.5 2.5C17.5 3.6 16.6 4.5 15.5 4.5C14.4 4.5 13.5 3.6 13.5 2.5ZM7.75 22C7.34 22 7 22.34 7 22.75C7 23.16 7.34 23.5 7.75 23.5C8.16 23.5 8.5 23.16 8.5 22.75C8.5 22.34 8.16 22 7.75 22ZM16.25 22C15.84 22 15.5 22.34 15.5 22.75C15.5 23.16 15.84 23.5 16.25 23.5C16.66 23.5 17 23.16 17 22.75C17 22.34 16.66 22 16.25 22ZM19.74 18.5C19.5 18.5 19.29 18.61 19.15 18.8C18.6 19.53 17.73 20 16.75 20H16.5V14L12.18 11.33L13.98 8.44C15.13 10.28 17.18 11.5 19.5 11.5V9.5C17.65 9.5 16.06 8.38 15.37 6.78L14.85 5.57C14.66 5.14 14.11 4.5 13.2 4.5H7.5L5 8.5L6.7 9.56L8.6 6.5H10.95L8.55 10.34C8.24 10.84 8.16 11.45 8.34 12.01L9.68 16.16L6.56 19.92C5.86 19.76 5.26 19.35 4.85 18.8C4.71 18.61 4.49 18.5 4.25 18.5C3.81 18.5 3.5 18.86 3.5 19.25C3.5 19.4 3.55 19.56 3.65 19.7C4.47 20.8 5.78 21.5 7.25 21.5H16.75C18.22 21.5 19.53 20.8 20.35 19.7C20.45 19.56 20.5 19.4 20.5 19.25C20.5 18.86 20.18 18.5 19.74 18.5ZM14.5 20H9.1L12 16.5L11 13.2L14.5 15.4V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Skateboarding'

/**
 * Material Icon: Skateboarding
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:skateboarding Material Icon Docs}
 */
export const Skateboarding = memo(Icon)
