import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.31 3.69C19.99 3.36 18.37 3 16.26 3C13.23 3 9.16995 3.75 6.45995 6.46C1.86995 11.05 2.89995 19.52 3.68995 20.31C4.00995 20.64 5.62995 21 7.73995 21C10.77 21 14.83 20.25 17.54 17.54C22.13 12.95 21.1 4.48 20.31 3.69ZM7.73995 19C6.59995 19 5.71995 18.88 5.20995 18.77C5.02995 17.98 4.90995 16.56 5.03995 14.94L9.04995 18.95C8.52995 18.99 8.07995 19 7.73995 19ZM16.13 16.13C14.8 17.46 13.07 18.18 11.47 18.57L5.42995 12.53C5.84995 10.85 6.58995 9.16 7.87995 7.88C9.19995 6.56 10.93 5.84 12.52 5.45L18.57 11.5C18.15 13.17 17.4 14.85 16.13 16.13ZM18.96 9.09L14.93 5.06C15.45 5.01 15.91 5 16.26 5C17.4 5 18.28 5.12 18.79 5.23C18.97 6.02 19.09 7.45 18.96 9.09Z" />
      <Path d="M14.0998 8.49996L8.49961 14.1002L9.89967 15.5002L15.4999 9.90001L14.0998 8.49996Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsFootball'

/**
 * Material Icon: Sports Football
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_football Material Icon Docs}
 */
export const SportsFootball = memo(Icon)
