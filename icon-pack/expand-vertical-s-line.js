import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.9492 7.44926L11.9995 2.49951L7.05223 7.44678L8.46644 8.86099L10.9995 6.32794L10.9995 17.6704L8.46449 15.1353L7.05028 16.5496L12 21.4995L16.9497 16.5498L15.5355 15.1356L12.9995 17.6716L12.9995 6.32794L15.535 8.86347L16.9492 7.44926Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandVerticalSLine'

/**
 * Remix Icon: Expand Vertical S Line
 * @see {@link https://remixicon.com/icon/expand-vertical-s-line Remix Icon Docs}
 */
export const ExpandVerticalSLine = memo(Icon)