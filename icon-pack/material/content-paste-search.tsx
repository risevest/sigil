import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 5H6V8H16V5H18V10H20V5C20 3.9 19.1 3 18 3H13.82C13.4 1.84 12.3 1 11 1C9.7 1 8.6 1.84 8.18 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H9V19H4V5ZM11 3C11.55 3 12 3.45 12 4C12 4.55 11.55 5 11 5C10.45 5 10 4.55 10 4C10 3.45 10.45 3 11 3Z" />
      <Path d="M19.3 18.9C19.7 18.2 20 17.4 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.4 21 17.2 20.7 17.9 20.3L20.6 23L22 21.6L19.3 18.9ZM15.5 19C14.1 19 13 17.9 13 16.5C13 15.1 14.1 14 15.5 14C16.9 14 18 15.1 18 16.5C18 17.9 16.9 19 15.5 19Z" />
    </Svg>
  )
}

Icon.displayName = 'ContentPasteSearch'

/**
 * Material Icon: Content Paste Search
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:content_paste_search Material Icon Docs}
 */
export const ContentPasteSearch = memo(Icon)
