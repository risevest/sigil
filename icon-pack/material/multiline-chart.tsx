import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 7.17488L20.59 5.76488L17.74 8.97488C15.68 6.65488 12.83 5.25488 9.61 5.25488C6.72 5.25488 4.07 6.41488 2 8.25488L3.42 9.67488C5.12 8.18488 7.27 7.25488 9.61 7.25488C12.35 7.25488 14.7 8.51488 16.38 10.4949L13.5 13.7349L9.5 9.73488L2 17.2449L3.5 18.7449L9.5 12.7349L13.5 16.7349L17.55 12.1849C18.3 13.5349 18.8 15.0849 18.99 16.7349H21C20.78 14.4349 20.05 12.3449 18.96 10.5949L22 7.17488Z" />
    </Svg>
  )
}

Icon.displayName = 'MultilineChart'

/**
 * Material Icon: Multiline Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:multiline_chart Material Icon Docs}
 */
export const MultilineChart = memo(Icon)
