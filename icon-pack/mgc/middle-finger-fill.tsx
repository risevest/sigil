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
          d="M12.5 1A2.5 2.5 0 0 0 10 3.5v4.55a2.5 2.5 0 0 0-3 2.412 4.732 4.732 0 0 0-.87-.584c-1.02-.518-2.01-.438-3.053-.012-.84.345-1.107 1.308-.747 2.028l2.842 5.684A8 8 0 0 0 12.326 22H13a8 8 0 0 0 8-8v-2.5a2.5 2.5 0 0 0-3.388-2.338A2.498 2.498 0 0 0 15 8.05V3.5A2.5 2.5 0 0 0 12.5 1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MiddleFingerFill'

/**
 * MingCute Icon: Middle Finger Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MiddleFingerFill = memo(Icon)
