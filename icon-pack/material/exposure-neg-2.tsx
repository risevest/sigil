import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.55 16.79L18.41 13.72C18.79 13.33 19.13 12.93 19.45 12.54C19.77 12.15 20.04 11.76 20.27 11.37C20.5 10.98 20.68 10.59 20.81 10.2C20.94 9.81 21 9.41 21 9.02C21 8.49 20.91 8 20.73 7.56C20.55 7.12 20.29 6.75 19.95 6.45C19.61 6.14 19.18 5.91 18.69 5.74C18.18 5.58 17.61 5.5 16.97 5.5C16.28 5.5 15.66 5.61 15.12 5.82C14.58 6.03 14.12 6.33 13.76 6.7C13.39 7.07 13.11 7.5 12.92 8C12.74 8.47 12.65 8.97 12.64 9.5H14.78C14.79 9.19 14.83 8.9 14.91 8.63C15 8.34 15.14 8.09 15.31 7.88C15.49 7.67 15.72 7.51 15.99 7.39C16.26 7.27 16.59 7.21 16.95 7.21C17.26 7.21 17.53 7.26 17.76 7.36C17.99 7.46 18.19 7.61 18.35 7.79C18.51 7.97 18.63 8.19 18.72 8.44C18.8 8.69 18.85 8.96 18.85 9.25C18.85 9.47 18.82 9.68 18.77 9.9C18.71 10.12 18.62 10.35 18.48 10.6C18.34 10.85 18.16 11.13 17.92 11.43C17.69 11.73 17.4 12.08 17.04 12.46L12.87 17.01V18.5H21.5V16.79H15.55ZM2.5 11.5V13.5H10.5V11.5H2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExposureNeg2'

/**
 * Material Icon: Exposure Neg 2
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:exposure_neg_2 Material Icon Docs}
 */
export const ExposureNeg2 = memo(Icon)
