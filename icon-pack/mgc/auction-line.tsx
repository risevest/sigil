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
          d="M2.686 10.462a2.5 2.5 0 0 0 0 3.536l2.829 2.828a2.5 2.5 0 0 0 4.242-2.121l.973-.973 6.078 7.014a2.793 2.793 0 1 0 3.94-3.94l-7.013-6.079.972-.972a2.5 2.5 0 0 0 2.121-4.243L14 2.685a2.5 2.5 0 0 0-4.243 2.122l-4.95 4.949a2.496 2.496 0 0 0-2.12.707M12.94 8.695l-4.242 4.242-2.122-2.121 4.243-4.243zM4.1 12.584a.5.5 0 1 1 .707-.708l2.829 2.829a.5.5 0 1 1-.707.707zm7.778-7.779a.5.5 0 1 1 .707-.707l2.829 2.829a.5.5 0 1 1-.707.707zm6.442 14.631-6.008-6.932.194-.195 6.933 6.008a.793.793 0 1 1-1.12 1.12"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AuctionLine'

/**
 * MingCute Icon: Auction Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AuctionLine = memo(Icon)
