import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.05 16.79L18.91 13.72C19.29 13.33 19.63 12.93 19.95 12.54C20.27 12.15 20.54 11.76 20.77 11.37C21 10.98 21.18 10.59 21.31 10.2C21.44 9.81 21.5 9.41 21.5 9.02C21.5 8.49 21.41 8 21.23 7.56C21.05 7.12 20.79 6.75 20.45 6.45C20.11 6.14 19.68 5.91 19.19 5.74C18.68 5.58 18.11 5.5 17.47 5.5C16.78 5.5 16.16 5.61 15.62 5.82C15.08 6.03 14.62 6.33 14.26 6.7C13.89 7.07 13.61 7.5 13.42 8C13.24 8.47 13.15 8.97 13.14 9.5H15.28C15.29 9.19 15.33 8.9 15.41 8.63C15.5 8.34 15.64 8.09 15.81 7.88C15.99 7.67 16.22 7.51 16.49 7.39C16.76 7.27 17.09 7.21 17.45 7.21C17.76 7.21 18.03 7.26 18.26 7.36C18.49 7.46 18.69 7.61 18.85 7.79C19.01 7.97 19.13 8.19 19.22 8.44C19.3 8.69 19.35 8.96 19.35 9.25C19.35 9.47 19.32 9.68 19.27 9.9C19.21 10.12 19.12 10.35 18.98 10.6C18.84 10.85 18.66 11.13 18.42 11.43C18.19 11.73 17.9 12.08 17.54 12.46L13.37 17.01V18.5H22V16.79H16.05ZM8 7.5H6V11.5H2V13.5H6V17.5H8V13.5H12V11.5H8V7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExposurePlus2'

/**
 * Material Icon: Exposure Plus 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:exposure_plus_2 Material Icon Docs}
 */
export const ExposurePlus2 = memo(Icon)
