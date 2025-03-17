import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 22.5C19.97 22.5 18.94 22.25 18 21.75C16.11 22.75 13.89 22.75 12 21.75C10.11 22.75 7.89 22.75 6 21.75C5.05 22.25 4.03 22.5 3 22.5H2V20.5H3C4.04 20.5 5.08 20.15 6 19.5C7.83 20.8 10.17 20.8 12 19.5C13.83 20.8 16.17 20.8 18 19.5C18.91 20.15 19.96 20.5 21 20.5H22V22.5H21ZM12 5C10.9 5 10 5.9 10 7C10 8.1 10.9 9 12 9C13.1 9 14 8.1 14 7C14 5.9 13.1 5 12 5ZM24 17C24 17 22.48 17.71 20.07 18.37C19.25 18.14 18.54 17.62 18 17C17.27 17.84 16.2 18.5 15 18.5C13.8 18.5 12.73 17.84 12 17C11.27 17.84 10.2 18.5 9 18.5C7.8 18.5 6.73 17.84 6 17C5.46 17.61 4.75 18.13 3.93 18.37C1.52 17.71 0 17 0 17C0 17 2.93 15.64 7.13 14.92L8.48 10.75C8.79 9.8 9.8 9.28 10.75 9.59C10.84 9.62 10.94 9.66 11.02 9.7L13.49 11L16.33 9.5L17.98 5.79L17.47 4.47L18.8 1.5L22 2.93L20.67 5.9L19.36 6.4L15.64 14.74C20.49 15.37 24 17 24 17ZM15.02 12.46L13.5 13.26L11.75 12.34L11.04 14.51C11.36 14.51 11.68 14.5 12 14.5C12.71 14.5 13.4 14.53 14.07 14.58L15.02 12.46Z" />
    </Svg>
  )
}

Icon.displayName = 'Kayaking'

/**
 * Material Icon: Kayaking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:kayaking Material Icon Docs}
 */
export const Kayaking = memo(Icon)
