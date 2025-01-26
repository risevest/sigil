import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM19.5 19C20.3284 19 21 19.6716 21 20.5C21 21.3284 20.3284 22 19.5 22C18.6716 22 18 21.3284 18 20.5C18 19.6716 18.6716 19 19.5 19ZM4.5 19C5.32843 19 6 19.6716 6 20.5C6 21.3284 5.32843 22 4.5 22C3.67157 22 3 21.3284 3 20.5C3 19.6716 3.67157 19 4.5 19ZM17 7C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17C15.1564 17 13.4896 15.9595 11.9997 13.8785C10.5104 15.9595 8.84364 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C8.84364 7 10.5104 8.04052 12.0003 10.1215C13.4896 8.04052 15.1564 7 17 7ZM12 2C12.8284 2 13.5 2.67157 13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2ZM4.5 2C5.32843 2 6 2.67157 6 3.5C6 4.32843 5.32843 5 4.5 5C3.67157 5 3 4.32843 3 3.5C3 2.67157 3.67157 2 4.5 2ZM19.5 2C20.3284 2 21 2.67157 21 3.5C21 4.32843 20.3284 5 19.5 5C18.6716 5 18 4.32843 18 3.5C18 2.67157 18.6716 2 19.5 2Z" />
    </Svg>
  )
}

Icon.displayName = 'Haze2Fill'

/**
 * Remix Icon: Haze 2 Fill
 * @see {@link https://remixicon.com/icon/haze-2-fill Remix Icon Docs}
 */
export const Haze2Fill = memo(Icon)
