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
          d="m12.117 2 .117.003C11.495 3.237 11 4.536 11 6a7 7 0 0 0 7 7c1.461 0 2.764-.496 3.997-1.234L22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.43 4.327-9.848 9.72-9.996zm1.998.755 7.13 7.13C20.225 10.495 19.228 11 18 11a5 5 0 0 1-5-5c0-1.134.43-2.07.976-3.01z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PasterFill'

/**
 * MingCute Icon: Paster Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PasterFill = memo(Icon)
