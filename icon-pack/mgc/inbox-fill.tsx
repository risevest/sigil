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
          d="M5.83 5.106A2 2 0 0 1 7.617 4h8.764a2 2 0 0 1 1.789 1.106l3.512 7.025a3 3 0 0 1 .318 1.34V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.528a3 3 0 0 1 .317-1.341zM16.381 6H7.618L4.12 13H7.5A1.5 1.5 0 0 1 9 14.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a1.5 1.5 0 0 1 1.5-1.5h3.38z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'InboxFill'

/**
 * MingCute Icon: Inbox Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const InboxFill = memo(Icon)
