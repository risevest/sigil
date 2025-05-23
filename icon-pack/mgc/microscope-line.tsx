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
          d="M15.682 3.282a2 2 0 0 1 2.701-.116l.128.116.707.708a2 2 0 0 1 .116 2.7l-.116.128-.707.707a2.031 2.031 0 0 1-.195.17 2 2 0 0 1-.397 1.826l-.116.125-.99.99A6.486 6.486 0 0 1 19 15.5c0 1.644-.61 3.145-1.616 4.29l-.194.21H20a1 1 0 0 1 .117 1.993L20 22H4a1 1 0 0 1-.117-1.993L4 20h8.5a4.5 4.5 0 0 0 3.075-7.786l-.18-.16-3.248 3.25a2 2 0 0 1-2.702.116l-.127-.117-2.121-2.121a2 2 0 0 1-.117-2.701l.117-.127 5.657-5.657a2 2 0 0 1 1.95-.513l.082-.1.089-.094zM6.49 13.89l2.12 2.12a1 1 0 1 1-1.414 1.415l-2.122-2.122A1 1 0 0 1 6.49 13.89m7.778-7.778L8.61 11.768l2.121 2.121 5.657-5.657-2.121-2.121Zm2.828-1.414-.707.707.707.707.707-.707z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MicroscopeLine'

/**
 * MingCute Icon: Microscope Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MicroscopeLine = memo(Icon)
