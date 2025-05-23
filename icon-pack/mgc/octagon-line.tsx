import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M14.9 4H9.1a1 1 0 0 0-.707.293l-4.1 4.1A1 1 0 0 0 4 9.101v5.798a1 1 0 0 0 .293.708l4.1 4.1a1 1 0 0 0 .708.293h5.798a1 1 0 0 0 .708-.293l4.1-4.1A1 1 0 0 0 20 14.9V9.1a1 1 0 0 0-.293-.707l-4.1-4.1A1 1 0 0 0 14.9 4M9.1 2h5.8a3 3 0 0 1 2.12.879l4.101 4.1A3 3 0 0 1 22 9.101v5.798a3 3 0 0 1-.879 2.122l-4.1 4.1a3 3 0 0 1-2.122.879H9.102a3 3 0 0 1-2.122-.879l-4.1-4.1A3 3 0 0 1 2 14.899V9.102a3 3 0 0 1 .879-2.122l4.1-4.1A3 3 0 0 1 9.101 2Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'OctagonLine'

/**
 * MingCute Icon: Octagon Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const OctagonLine = memo(Icon)
