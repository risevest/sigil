import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 10.2018L9.30278 12L12 13.7982L14.6972 12L12 10.2018ZM16.5 10.7982L19.1972 9L13 4.86852V8.46482L16.5 10.7982ZM20 10.8685L18.3028 12L20 13.1315V10.8685ZM16.5 13.2018L13 15.5352V19.1315L19.1972 15L16.5 13.2018ZM11 8.46482V4.86852L4.80278 9L7.5 10.7982L11 8.46482ZM4.80278 15L11 19.1315V15.5352L7.5 13.2018L4.80278 15ZM5.69722 12L4 10.8685V13.1315L5.69722 12ZM2 9C2 8.66565 2.1671 8.35342 2.4453 8.16795L11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L21.5547 8.16795C21.8329 8.35342 22 8.66565 22 9V15C22 15.3344 21.8329 15.6466 21.5547 15.8321L12.5547 21.8321C12.2188 22.056 11.7812 22.056 11.4453 21.8321L2.4453 15.8321C2.1671 15.6466 2 15.3344 2 15V9Z" />
    </Svg>
  )
}

Icon.displayName = 'CodepenFill'

/**
 * Remix Icon: Codepen Fill
 * @see {@link https://remixicon.com/icon/codepen-fill Remix Icon Docs}
 */
export const CodepenFill = memo(Icon)
