import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.998 2C14.2072 2 15.998 3.79086 15.998 6V15H16.998C17.5476 15 17.998 14.55 17.998 14V8C17.998 7.44772 18.4458 7 18.998 7C19.5503 7 19.998 7.44772 19.998 8V14C19.998 15.6569 18.6549 17 16.998 17H15.998V20H17.998V22H5.99805V20H7.99805V14H6.99805C5.34119 14 3.99805 12.6569 3.99805 11V9C3.99805 8.44772 4.44576 8 4.99805 8C5.55033 8 5.99805 8.44772 5.99805 9V11C5.99805 11.55 6.44805 12 6.99805 12C7.36471 12 7.69805 12 7.99805 12V6C7.99805 3.79086 9.78891 2 11.998 2Z" />
    </Svg>
  )
}

Icon.displayName = 'CactusFill'

/**
 * Remix Icon: Cactus Fill
 * @see {@link https://remixicon.com/icon/cactus-fill Remix Icon Docs}
 */
export const CactusFill = memo(Icon)
