import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.23 5.99609C9.57 5.99609 8.01 6.65609 6.87 7.72609C6.54 6.72609 5.61 5.99609 4.5 5.99609C3.12 5.99609 2 7.11609 2 8.49609C2 9.87609 3.12 10.9961 4.5 10.9961C4.71 10.9961 4.91 10.9661 5.11 10.9161C5.06 11.1661 5.02 11.4261 5.01 11.6961C4.83 15.3761 7.96 18.3761 11.69 17.9661C14.24 17.6861 16.37 15.7061 16.88 13.1961C17.03 12.4861 17.03 11.7961 16.94 11.1361C16.85 10.5361 17.32 10.0061 17.93 10.0061H22V5.99609H11.23ZM4.5 8.99609C4.22 8.99609 4 8.77609 4 8.49609C4 8.21609 4.22 7.99609 4.5 7.99609C4.78 7.99609 5 8.21609 5 8.49609C5 8.77609 4.78 8.99609 4.5 8.99609ZM11 14.9961C9.34 14.9961 8 13.6561 8 11.9961C8 10.3361 9.34 8.99609 11 8.99609C12.66 8.99609 14 10.3361 14 11.9961C14 13.6561 12.66 14.9961 11 14.9961Z" />
      <Path d="M11 13.9961C12.1046 13.9961 13 13.1007 13 11.9961C13 10.8915 12.1046 9.99609 11 9.99609C9.89543 9.99609 9 10.8915 9 11.9961C9 13.1007 9.89543 13.9961 11 13.9961Z" />
    </Svg>
  )
}

Icon.displayName = 'Sports'

/**
 * Material Icon: Sports
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports Material Icon Docs}
 */
export const Sports = memo(Icon)
