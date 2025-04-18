import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.6 9.79125L19.44 6.61125C19.6 6.30125 19.48 5.92125 19.18 5.76125C18.89 5.61125 18.53 5.70125 18.35 5.98125L16.47 9.22125C13.61 8.01125 10.39 8.01125 7.53 9.22125L5.65 5.98125C5.46 5.69125 5.07 5.60125 4.78 5.78125C4.5 5.96125 4.41 6.32125 4.56 6.61125L6.4 9.79125C3.3 11.5613 1.28 14.7513 1 18.3113H23C22.72 14.7513 20.7 11.5613 17.6 9.79125ZM7 15.5613C6.31 15.5613 5.75 15.0013 5.75 14.3113C5.75 13.6213 6.31 13.0613 7 13.0613C7.69 13.0613 8.25 13.6213 8.25 14.3113C8.25 15.0013 7.69 15.5613 7 15.5613ZM17 15.5613C16.31 15.5613 15.75 15.0013 15.75 14.3113C15.75 13.6213 16.31 13.0613 17 13.0613C17.69 13.0613 18.25 13.6213 18.25 14.3113C18.25 15.0013 17.69 15.5613 17 15.5613Z" />
    </Svg>
  )
}

Icon.displayName = 'Android'

/**
 * Material Icon: Android
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:android Material Icon Docs}
 */
export const Android = memo(Icon)
