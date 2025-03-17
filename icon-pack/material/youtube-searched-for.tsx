import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.01 14.2598H16.21L15.94 13.9898C16.92 12.8498 17.51 11.3798 17.51 9.75977C17.51 6.16977 14.6 3.25977 11.01 3.25977C7.42 3.25977 4.51 6.25977 4.51 9.75977H2L5.84 13.7598L10 9.75977H6.51C6.51 7.25977 8.53 5.25977 11.01 5.25977C13.49 5.25977 15.51 7.26977 15.51 9.75977C15.51 12.2398 13.49 14.2598 11.01 14.2598C10.36 14.2598 9.75 14.1198 9.19 13.8798L7.71 15.3598C8.68 15.9298 9.8 16.2598 11.01 16.2598C12.62 16.2598 14.09 15.6698 15.23 14.6898L15.5 14.9598V15.7498L20.51 20.7398L22 19.2598L17.01 14.2598Z" />
    </Svg>
  )
}

Icon.displayName = 'YoutubeSearchedFor'

/**
 * Material Icon: Youtube Searched For
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:youtube_searched_for Material Icon Docs}
 */
export const YoutubeSearchedFor = memo(Icon)
