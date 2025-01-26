import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z" />
    </Svg>
  )
}

Icon.displayName = 'Loader5Fill'

/**
 * Remix Icon: Loader 5 Fill
 * @see {@link https://remixicon.com/icon/loader-5-fill Remix Icon Docs}
 */
export const Loader5Fill = memo(Icon)