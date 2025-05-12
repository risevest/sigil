import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6.4 19.7797C7.60398 19.7797 8.58 18.8037 8.58 17.5997C8.58 16.3957 7.60398 15.4197 6.4 15.4197C5.19602 15.4197 4.22 16.3957 4.22 17.5997C4.22 18.8037 5.19602 19.7797 6.4 19.7797Z"
        fill={color}
      />
      <Path
        d="M4.22 4.21973V7.04973C11.25 7.04973 16.95 12.7497 16.95 19.7797H19.78C19.78 11.1897 12.81 4.21973 4.22 4.21973ZM4.22 9.87973V12.7097C8.12 12.7097 11.29 15.8797 11.29 19.7797H14.12C14.12 14.3097 9.69 9.87973 4.22 9.87973Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'RssFeed'

/**
 * Material Icon: Rss Feed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rss_feed Material Icon Docs}
 */
export const RssFeed = memo(Icon)
