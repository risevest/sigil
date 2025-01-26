import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.13317 2L5.01052 9.85858C4.70849 11.9728 5.53231 13.7891 6.89117 15.0465C7.99601 16.0688 9.45948 16.7319 11.0005 16.9343V20H6.00047V22H18.0005V20H13.0005V16.9343C14.5415 16.7319 16.0049 16.0688 17.1098 15.0465C18.4686 13.7891 19.2924 11.9728 18.9904 9.85858L17.8678 2H6.13317ZM10.0003 7C9.16936 7.00013 8.16238 7.24244 7.37122 7.47579L7.86776 4H16.1332L16.6234 7.4314C15.7848 7.70691 14.8897 8 14.0005 8C12.6083 8 11.4276 6.99978 10.0003 7Z" />
    </Svg>
  )
}

Icon.displayName = 'Goblet2Fill'

/**
 * Remix Icon: Goblet 2 Fill
 * @see {@link https://remixicon.com/icon/goblet-2-fill Remix Icon Docs}
 */
export const Goblet2Fill = memo(Icon)
