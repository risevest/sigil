import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 12.85 18.49 14.65 17.62 16.21L16.17 14.76C17.46 12.82 17.24 10.18 15.53 8.47C13.58 6.52 10.41 6.52 8.46 8.47C6.51 10.42 6.51 13.59 8.46 15.54C10.17 17.25 12.81 17.46 14.75 16.18L16.47 17.9C15.28 19.32 13.74 20.41 12 20.94C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" />
    </Svg>
  )
}

Icon.displayName = 'Policy'

/**
 * Material Icon: Policy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:policy Material Icon Docs}
 */
export const Policy = memo(Icon)
