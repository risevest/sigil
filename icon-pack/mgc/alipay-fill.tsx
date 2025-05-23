import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20.893 16.578A9.957 9.957 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.981 9.981 0 0 0 7.794-3.735l-.725-.362a258.153 258.153 0 0 1-3.192-1.484c-.805-.379-1.522-.716-2.18-1.013a8.582 8.582 0 0 1-.927 1.114C11.648 17.64 10.52 18 9.5 18 7.632 18 6 16.82 6 15c0-1.684 1.48-3 3-3 1.268 0 2.494.334 3.887.884.212-.407.428-.866.647-1.384H9a1 1 0 1 1 0-2h2V9H8a1 1 0 0 1 0-2h3V6a1 1 0 1 1 2 0v1h3a1 1 0 1 1 0 2h-3v.5h2a1 1 0 0 1 .94 1.342 25.217 25.217 0 0 1-1.212 2.835c.629.287 1.313.609 2.06.96.938.442 1.975.93 3.126 1.453l.033.016z"
        />
        <Path
          fill={color}
          d="M9 14c.827 0 1.687.194 2.797.608a5.85 5.85 0 0 1-.442.497C10.602 15.86 9.98 16 9.5 16 8.368 16 8 15.38 8 15c0-.516.52-1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AlipayFill'

/**
 * MingCute Icon: Alipay Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AlipayFill = memo(Icon)
