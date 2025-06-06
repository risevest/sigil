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
          d="M13.17 3a3.013 3.013 0 0 0 .59 2.997L11.997 7.76A3 3 0 0 0 7 10v3.749A3.25 3.25 0 0 0 10.25 17H14a3 3 0 0 0 2.24-4.996l1.764-1.765a2.997 2.997 0 0 0 2.997.59L20.999 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6.58 0c.69 0 1.25.56 1.25 1.25V8a1 1 0 1 1-2 0V6.414L12.414 13H14a1 1 0 1 1 0 2h-3.75C9.56 15 9 14.44 9 13.75V10a1 1 0 0 1 2 0v1.586L17.586 5H16a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ScaleFill'

/**
 * MingCute Icon: Scale Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScaleFill = memo(Icon)
