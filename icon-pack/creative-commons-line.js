import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 8C10.1045 8 11.1049 8.44836 11.829 9.17297L10.4153 10.5865C10.0533 10.2241 9.55298 10 9 10 7.89502 10 7 10.895 7 12 7 13.105 7.89502 14 9 14 9.55249 14 10.0525 13.7762 10.4144 13.4144L11.828 14.828C11.104 15.552 10.104 16 9 16 6.79199 16 5 14.208 5 12 5 9.79199 6.79199 8 9 8ZM18.829 9.17297C18.1049 8.44836 17.1045 8 16 8 13.792 8 12 9.79199 12 12 12 14.208 13.792 16 16 16 17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14 14.895 14 14 13.105 14 12 14 10.895 14.895 10 16 10 16.553 10 17.0533 10.2241 17.4153 10.5865L18.829 9.17297ZM2 12C2 6.47717 6.47717 2 12 2 17.5228 2 22 6.47717 22 12 22 17.5228 17.5228 22 12 22 6.47717 22 2 17.5228 2 12ZM12 4C7.58167 4 4 7.58167 4 12 4 16.4183 7.58167 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58167 16.4183 4 12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'CreativeCommonsLine'

/**
 * Remix Icon: Creative Commons Line
 * @see {@link https://remixicon.com/icon/creative-commons-line Remix Icon Docs}
 */
export const CreativeCommonsLine = memo(Icon)
