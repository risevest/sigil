import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 19.5C5.9 19.5 5 20.4 5 21.5H19C19 20.4 18.1 19.5 17 19.5H13V17.5H16C17.1 17.5 18 16.6 18 15.5H10C8.34 15.5 7 14.16 7 12.5C7 11.41 7.59 10.46 8.47 9.93C8.88 10.52 9.53 10.93 10.3 10.99C11 11.05 11.66 10.8 12.15 10.37L12.74 11.98L13.68 11.64L14.02 12.58L15.9 11.9L15.56 10.96L16.5 10.62L13.76 3.1L12.82 3.44L12.48 2.5L10.6 3.18L10.94 4.12L10 4.47L10.56 6.02C9.39 5.98 8.37 6.77 8.08 7.88C6.27 8.64 5 10.42 5 12.5C5 15.26 7.24 17.5 10 17.5V19.5H7ZM12.86 5.02L14.57 9.72L13.63 10.06L11.92 5.36L12.86 5.02ZM10.5 7.5C11.05 7.5 11.5 7.95 11.5 8.5C11.5 9.05 11.05 9.5 10.5 9.5C9.95 9.5 9.5 9.05 9.5 8.5C9.5 7.95 9.95 7.5 10.5 7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Biotech'

/**
 * Material Icon: Biotech
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:biotech Material Icon Docs}
 */
export const Biotech = memo(Icon)
