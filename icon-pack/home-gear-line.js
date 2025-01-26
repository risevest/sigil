import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8.59117 13.8089C8.52937 13.5486 8.49666 13.277 8.49666 12.9978C8.49666 12.7186 8.52936 12.4471 8.59115 12.1868L7.60001 11.6145L8.59952 9.88333L9.59136 10.456C9.98427 10.0843 10.4633 9.80273 10.9954 9.64436V8.49998H12.9945V9.64436C13.5266 9.80272 14.0056 10.0843 14.3985 10.4559L15.3904 9.88323L16.39 11.6144L15.3987 12.1867C15.4605 12.447 15.4932 12.7186 15.4932 12.9978C15.4932 13.277 15.4605 13.5485 15.3988 13.8088L16.39 14.381L15.3905 16.1122L14.3986 15.5396C14.0057 15.9112 13.5267 16.1928 12.9946 16.3512V17.4956H10.9955V16.3512C10.4634 16.1929 9.98437 15.9114 9.59144 15.5397L8.59957 16.1123L7.60001 14.3811L8.59117 13.8089ZM11.995 14.4971C12.823 14.4971 13.4942 13.8258 13.4942 12.9978C13.4942 12.1698 12.823 11.4985 11.995 11.4985C11.1669 11.4985 10.4957 12.1698 10.4957 12.9978C10.4957 13.8258 11.1669 14.4971 11.995 14.4971Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeGearLine'

/**
 * Remix Icon: Home Gear Line
 * @see {@link https://remixicon.com/icon/home-gear-line Remix Icon Docs}
 */
export const HomeGearLine = memo(Icon)
