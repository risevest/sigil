import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.71 3.69531C10.71 2.59531 11.61 1.69531 12.71 1.69531C13.81 1.69531 14.71 2.59531 14.71 3.69531C14.71 4.79531 13.81 5.69531 12.71 5.69531C11.61 5.69531 10.71 4.79531 10.71 3.69531ZM19.71 12.6953V10.6953C18.17 10.7153 16.62 9.94531 15.64 8.86531L14.35 7.43531C14.11 7.19531 13.91 7.07531 13.72 6.97531C13.36 6.78531 13 6.67531 12.52 6.71531C12.03 6.75531 11.61 6.98531 11.29 7.32531L14.71 10.7453C16 11.8153 17.96 12.6853 19.71 12.6953ZM10.71 19.6953C9.04998 19.6953 7.70998 18.3553 7.70998 16.6953C7.70998 15.3853 8.54998 14.2853 9.70998 13.8653V11.7953C7.42998 12.2553 5.70998 14.2753 5.70998 16.6953C5.70998 19.4553 7.94998 21.6953 10.71 21.6953C13.13 21.6953 15.15 19.9753 15.61 17.6953H13.54C13.13 18.8553 12.02 19.6953 10.71 19.6953ZM3.51998 2.50531L2.09998 3.91531L10.71 12.5253V14.6953C10.71 15.7953 11.61 16.6953 12.71 16.6953H14.88L20.49 22.3053L21.9 20.8953L3.51998 2.50531Z" />
    </Svg>
  )
}

Icon.displayName = 'NotAccessible'

/**
 * Material Icon: Not Accessible
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:not_accessible Material Icon Docs}
 */
export const NotAccessible = memo(Icon)
