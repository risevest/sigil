import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" />
    </Svg>
  )
}

Icon.displayName = 'SentimentVeryDissatisfied'

/**
 * Material Icon: Sentiment Very Dissatisfied
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sentiment_very_dissatisfied Material Icon Docs}
 */
export const SentimentVeryDissatisfied = memo(Icon)
