import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H12.98C12.76 18.16 12.46 17.24 12.85 16.67C13.66 15.55 15.52 18.44 16.66 16.58C17.43 15.01 15.08 15.29 15.02 14.46C14.97 13.62 18.7 14.63 18.06 12.8C17.45 11.07 15.64 13.28 15.3 12.27C14.72 10.53 20 10.59 18.15 8.26C16.39 6.04 15.68 11.11 13.74 10.59C12.4 10.23 12.73 7.71 11.09 8.15C9.21 8.66 12.12 10.35 11.09 11.01C10.13 11.64 9.37 10.09 8.58 9.82C8.38 9.75 7.89 9.77 7.67 10.01C6.89 10.87 7.95 11.17 7.92 11.92C7.9 12.67 6.33 12.41 6.41 13.41C6.53 15.01 8.59 13.86 8.81 14.65C9.36 16.63 6.92 16.8 8.31 17.92C9.84 18.63 10.22 15.98 11.11 16.57C11.69 16.95 11.41 18.02 11.27 19H4V7H8.05L9.88 5H14.12L15.95 7H20V19Z" />
      <Path d="M17.28 17.15C17.28 17.63 17.67 18.01 18.14 18.01C18.62 18.01 19 17.63 19 17.15C19 16.67 18.61 16.29 18.14 16.29C17.66 16.29 17.28 16.67 17.28 17.15Z" />
    </Svg>
  )
}

Icon.displayName = 'DirtyLens'

/**
 * Material Icon: Dirty Lens
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dirty_lens Material Icon Docs}
 */
export const DirtyLens = memo(Icon)
