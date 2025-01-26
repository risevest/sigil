import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 18.0001H9.5V19.2501C9.5 20.7688 8.26878 22.0001 6.75 22.0001C5.23122 22.0001 4 20.7688 4 19.2501V18.0001ZM8 6.12067C10 6.12067 11 9.00006 11 11.0001C11 12.0001 10.5 13.0001 10 14.5001L9.5 16.0001H4C4 15.0001 3.5 13.5001 3.5 11.0001C3.5 8.50006 5.49783 6.12067 8 6.12067ZM20.054 14.0984L19.8369 15.3294C19.5732 16.8251 18.1468 17.8238 16.6511 17.5601C15.1554 17.2964 14.1567 15.87 14.4205 14.3743L14.6375 13.1433L20.054 14.0984ZM18.1776 1.70488C20.6417 2.13938 22.196 4.82954 21.7619 7.29156C21.3278 9.75358 20.5749 11.144 20.4013 12.1288L14.9848 11.1737L14.7529 9.60967C14.5209 8.04564 14.2022 6.974 14.3758 5.9892C14.7231 4.01958 16.2079 1.35759 18.1776 1.70488Z" />
    </Svg>
  )
}

Icon.displayName = 'FootprintFill'

/**
 * Remix Icon: Footprint Fill
 * @see {@link https://remixicon.com/icon/footprint-fill Remix Icon Docs}
 */
export const FootprintFill = memo(Icon)
