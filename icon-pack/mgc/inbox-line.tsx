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
          d="M16.382 4a2 2 0 0 1 1.71.964l.079.142 3.512 7.025a3 3 0 0 1 .308 1.109l.009.232V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19v-5.528a3 3 0 0 1 .22-1.13l.097-.212 3.512-7.024a2 2 0 0 1 1.628-1.1L7.618 4zM8 14H4v5h16v-5h-4v.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5zm8.382-8H7.618l-3 6H8.5a1.5 1.5 0 0 1 1.493 1.356L10 13.5v.5h4v-.5a1.5 1.5 0 0 1 1.356-1.493L15.5 12h3.882z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'InboxLine'

/**
 * MingCute Icon: Inbox Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const InboxLine = memo(Icon)
