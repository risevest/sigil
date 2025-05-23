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
          d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5.002 5.002 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.194-2.293.489-2.96.815-1.22.597.206 1.026.95 1.258C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.749-.234 2.17-.66.95-1.258-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996.884.433 1.811 1.162 1.811 2.241 0 .811-.524 1.4-1.034 1.777C17.816 21.865 14.536 22 12 22c-2.282 0-4.387-.288-5.955-.778C4.795 20.832 3 20.062 3 18.5c0-1.08.927-1.808 1.811-2.24.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MapPinLine'

/**
 * MingCute Icon: Map Pin Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MapPinLine = memo(Icon)
